import express from 'express';
import serverConfig from "./config/serverConfig";
import apiRouter from './routes';

// Create an instance of Express
const app = express();


// Middleware to parse JSON requests
app.use(express.json());

// A basic route
app.use("/api", apiRouter)

// Start the server

app.listen(serverConfig.PORT, () => {
  console.log(`Server running at http://localhost:${serverConfig.PORT}`);
});
