import sampleQueue from "../queues/sampleQueue";

export default function(name : string , payload : Record<string, unknown>, priority : number){
     sampleQueue.add(name, payload,{ priority})
    console.log("sucessfully added a new job")
}