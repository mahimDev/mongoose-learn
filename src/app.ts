import { create } from "domain";
import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";

const app: Application = express();

app.use(express.json());

const noteSchema = new Schema({
  title: { type: String, require: true, trim: true },
  content: { type: String, default: "" },
  category: {
    type: String,
    enum: ["personal", "work", "study"],
    default: "personal",
  },
  pinned: {
    type: Boolean,
    default: false,
  },
  // date: { type: Date.now },
});

const Note = model(`Note`, noteSchema);

app.post("/notes/create-note", async (req: Request, res: Response) => {
  const body = req.body;
  // const myNote = new Note({
  //   title: "Learning mongoose",
  //   content: "i am learning mongoose",
  // date: { Date },
  // });
  // await myNote.save();

  const myNote = await Note.create(body);
  res.status(201).json({
    success: true,
    massage: "note create successfully",
    note: myNote,
  });
});
// get oparetion
app.get("/notes", async (req: Request, res: Response) => {
  const myNote = await Note.find();
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
