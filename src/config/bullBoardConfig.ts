import { ExpressAdapter } from "@bull-board/express";
import { createBullBoard } from "@bull-board/api";
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import sampleQueue from "../queues/sampleQueue";

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath("/dashboard/queue");

createBullBoard({
    queues : [new BullMQAdapter(sampleQueue)],
    serverAdapter
})

export default serverAdapter;


