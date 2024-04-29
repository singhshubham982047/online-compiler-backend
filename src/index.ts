import express, { Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import { connectDB } from "./db/connect.db";
import compilerRoute from "./routes/compiler.route";

config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", compilerRoute);

app.get("/", (req: Request, res: Response) => {
  return res.status(200).send("hello world");
});

connectDB().then(() => {
  app.listen(5000, () => console.log("server open on 5000"));
  console.log("server open");
});
