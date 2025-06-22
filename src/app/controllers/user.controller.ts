import express, { Request, Response } from "express";
import { User } from "../models/user.model";
import { z } from "zod";

export const userRouter = express.Router();

const createUserZodSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.number(),
  email: z.string(),
  role: z.string().optional(),
});

userRouter.post("/create-user", async (req: Request, res: Response) => {
  try {
    const body = await createUserZodSchema.parseAsync(req.body);
    const user = await User.create(body);
    res.status(201).json({
      success: true,
      message: "user create successfully",
      user,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.massage,
      error,
    });
  }
});
