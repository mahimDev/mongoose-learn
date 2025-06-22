import express, { Application, Request, Response } from "express";
import { notesRoute } from "./app/controllers/notes.controller";
import { userRouter } from "./app/controllers/user.controller";

export const app: Application = express();

app.use(express.json());
app.use("/notes", notesRoute);
app.use("/user", userRouter);
app.get("/", (req: Request, res: Response) => {
  res.send(`running mongoose server`);
});
export default app;
