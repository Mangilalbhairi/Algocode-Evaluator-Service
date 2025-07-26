import express from 'express';
import serverConfig from "./config/serverConfig";
import apiRouter from './routes';
import sampleQueueProducer from './producers/sampleQueueProducer';
import SampleWorker from './workers/SampleWorker';
import serverAdapter from './config/bullBoardConfig';
import runPython from './containers/runPythonDocker';
// Create an instance of Express
const app = express();


// Middleware to parse JSON requests
app.use(express.json());

// A basic route
app.use("/api", apiRouter)
app.use("/dashboard/queue", serverAdapter.getRouter())

// Start the server

app.listen(serverConfig.PORT, () => {
 sampleQueueProducer("SampleJob", {
    name:"mangilal",
    age:25
  },2)
  SampleWorker("SampleJob")
 const code = 'print(20)'
 const  inputCase = '10'
   runPython(code, inputCase)

  console.log(`Server running at http://localhost:${serverConfig.PORT}`);
});
