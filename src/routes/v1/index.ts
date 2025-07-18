
import express from 'express';
import pingController from "../../controllers/index";
console.log(pingController)

const v1Router = express.Router();

v1Router.get("/ping", pingController.PingInfo)

export default v1Router;