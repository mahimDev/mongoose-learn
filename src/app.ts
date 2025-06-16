import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";

const app: Application = express();
const noteSchema = new Schema({
  title: String,
  content: String,
});

const Note = model(`Note`, noteSchema);

app.post("/create-note", async (req: Request, res: Response) => {
  const myNote = new Note({
    title: "Learning mongoose",
    content: "i am learning mongoose",
  });
  await myNote.save();
  res.status(201).json({
    success: true,
    massage: "note create successfully",
    note: myNote,
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send(`running mongoose server`);
});
export default app;
