import { Job } from "bullmq";
import { Ijob } from "../types/bullMqJobDefinition";

export default class SampleJob implements Ijob {
  name: string;
  payload?: Record<string, unknown>;

  constructor(payload: Record<string, unknown>) {
    this.payload = payload;
    this.name = this.constructor.name;
  }

  
  async handle(job?: Job): Promise<void> {
    console.log("Handler for job called!");
    console.log("Payload:", this.payload);

    if (job) {
      console.log("Job Info:", {
        name: job.name,
        id: job.id,
        data: job.data,
      });
    }

  }

  async failed(job?: Job): Promise<void> {
    console.log("Failed job called");
    if (job) {
      console.log("Failed Job ID:", job.id);
    }
  }
}
