import { Response, Request } from "express";

const PingInfo = (_req : Request, res:Response) => {
    return res.status(200).json({
        sucess:true,
        message : "Ping is alive"
    })
}

export default {
    PingInfo 
}