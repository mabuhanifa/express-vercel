// import  mysql  from 'mysql';
// import axios from 'axios';
// import * as dotenv from "dotenv";
// import cheerio from "cheerio ";
// import express, { Request, Response } from "express";
// dotenv.config();

const connectionString = process.env.DATABASE_URL || "";
const connection = mysql.createConnection(connectionString);
connection.connect();
