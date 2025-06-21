import express, { Application, Request, Response } from "express";
import { notesRoute } from "./app/controllers/notes.controllers";

export const app: Application = express();

app.use(express.json());
app.use("/notes", notesRoute);
app.get("/", (req: Request, res: Response) => {
  res.send(`running mongoose server`);
});
export default app;
