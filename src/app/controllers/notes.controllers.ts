import express, { Request, Response } from "express";
import { Note } from "../models/notes.models";
export const notesRoute = express.Router();

notesRoute.post("/create-note", async (req: Request, res: Response) => {
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
notesRoute.get("/", async (req: Request, res: Response) => {
  const myNote = await Note.find();
  res.status(201).json({
    success: true,
    massage: "note create successfully",
    note: myNote,
  });
});
