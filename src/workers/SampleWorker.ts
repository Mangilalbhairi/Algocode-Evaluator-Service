
import { Worker ,Job } from "bullmq";

import redisConnection from "../config/redisConfig";
import SampleJob from "../jobs/SampleJob";

export default function SampleWorker(queueName : string){
    console.log("job processing",queueName)
    new Worker(queueName, async(job:Job) => {
        console.log("job under processing by worker",job.name)
        if(job.name === "SampleJob"){
            const sampleJobInstance = new  SampleJob(job.data)
            try{
                await sampleJobInstance.handle(job)
            }
            catch(err){
                console.log(err)
            }
            return true;
        }

        
    }, {connection : redisConnection
    
    }
)
}