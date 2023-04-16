import cors from "cors";
import * as dotenv from "dotenv";
import express, { Request, Response } from "express";
import mysql from "mysql";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;
const connectionString = process.env.DATABASE_URL || "";
const connection = mysql.createConnection;

app.get("/api/characters", (req: Request, res: Response) => {
  const query = "Select * from Characters";
  res.send("It working");
});

app.get("/api/characters/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  res.send(`It working from ${id}`);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
