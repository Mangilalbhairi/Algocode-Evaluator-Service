

import dockerStreamOutput from "../types/dockerStreamOutput";
import { DOCKER_STREAM_HEADER_SIZE } from "../utils/constant";


export default async function decodeDockerStream(buffer : Buffer)  {
    let offset = 0;
    const output : dockerStreamOutput = {
        stderr: "",
        stdout: ""
    }
    console.log(buffer, "docker rode")
   
    while (offset < buffer.length) {
        const typeOfStream = buffer[offset];
       

         const length = buffer.readUint32BE(offset + 4);
        

        offset += DOCKER_STREAM_HEADER_SIZE;

        if(typeOfStream == 1) {
            output.stdout = buffer.toString('utf-8', offset, offset+length)
        }
        else if(typeOfStream == 0){
            output.stderr = buffer.toString('utf-8', offset, offset)
        }

        offset += length;
    }

    

    return output;


}