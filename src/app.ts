import cors from "cors";
import * as dotenv from "dotenv";
import express, { Request, Response } from "express";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;

app.get("/api/characters", (req: Request, res: Response) => {
  res.send("It working");
});

app.get("/api/characters/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  res.send(`It working from ${id}`);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
