import { model, Schema } from "mongoose";

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

export const Note = model(`Note`, noteSchema);
