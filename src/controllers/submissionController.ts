
import { Request, Response } from "express"

const addSubmission = (req: Request, res: Response) => {

    const submission = req.body;

    return res.status(200).json({
        success:true,
        message : "successfull new submission!",
        data : submission,
        error : {}
    })

}

export default {addSubmission};