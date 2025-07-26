
import express from 'express';
import submission from "../../controllers/index";
import { validation } from '../../validation.ts/validate';
import { submissionSchema } from '../../dto/createSubmissionDto';
// console.log(pingController)

const v1Router = express.Router();

v1Router.get("/ping", submission.PingInfo)
v1Router.post("/submission",validation(submissionSchema), submission.addSubmission)

export default v1Router;