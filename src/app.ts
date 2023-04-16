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
const connection = mysql.createConnection(connectionString);
connection.connect();

app.get("/api/characters", (req: Request, res: Response) => {
  const query = "Select * from Characters";

  connection.query(query, (err, rows) => {
    if (err) throw err;
    const retVal = {
      data: rows,
      message: rows.length === 0 ? "No Record Found" : "",
    };
    return res.send(retVal);
  });
});

app.get("/api/characters/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const query = `Select * FROM Characters WHERE ID = "${id}" LIMIT 1`;
  connection.query(query, (err, rows) => {
    if (err) throw err;
    const retVal = {
      data: rows.length > 0 ? rows[0] : null,
      message: rows.length === 0 ? "No Record Found" : "",
    };
    return res.send(retVal);
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
