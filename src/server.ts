import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
let server: Server;

const port = 5000;
async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://mongoose-practice:EXeHG39bu6HvvUfw@practice.hcuo4.mongodb.net/mongoosePractice?retryWrites=true&w=majority&appName=practice`
    );
    server = app.listen(port, () => {
      console.log(`App is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
