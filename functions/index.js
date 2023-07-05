import { onRequest } from "firebase-functions/v2/https";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json())

app.get("/tasks", getTasks)
app.post("/tasks", addTaks)


export const api = onRequest(app);
