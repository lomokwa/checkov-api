import { onRequest } from "firebase-functions/v2/https";
import express from "express";
import cors from "cors";

import { getTasks, addTask } from "./src/tasks.js";



const app = express();
app.use(cors());
app.use(express.json())

app.get("/tasks/:uid", getTasks)
app.post("/tasks/:uid", addTask)


export const api = onRequest(app);
