import express, { json, Response, Request } from "express";
import router from "./routes/routes";
import cors from "cors"


export function createApp(){

const app = express();
app.use(json());
app.use("/api", router);
app.use(cors())

return app;

}