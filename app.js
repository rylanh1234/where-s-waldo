const express = require("express");
const app = express();
const path = require("node:path");
const pageRouter = require("./routes/pageRouter");
const APIRouter = require("./routes/APIRouter");
require("dotenv/config");
const { PrismaPg } = require('@prisma/adapter-pg');  // For other db adapters, see Prisma docs
const { PrismaClient } = require('./generated/prisma/client');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

// make globalTime and reset it when server restarts
const globalTime = { startTime: null, endTime: null};
module.exports = { prisma, globalTime };

app.use("/api", APIRouter);
app.use("/", pageRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Express app listening on port ${PORT}!`);
});