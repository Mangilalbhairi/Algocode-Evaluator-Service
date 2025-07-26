import {z} from "zod";

type createSubmissionDto = z.infer<typeof submissionSchema>

export const submissionSchema = z.object({
    userId : z.string().min(10, "user id must be atleast 10 character"),
    problemId : z.string().min(10, "Problem is must be atleast 10 character"),
    code : z.string(),
    language : z.string()
}).strict()

export default createSubmissionDto;
