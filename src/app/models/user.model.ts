import { model, Schema } from "mongoose";
import { IUser } from "../../interfaces/user.interface";

const userSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
  },
});

export const User = model("User", userSchema);
