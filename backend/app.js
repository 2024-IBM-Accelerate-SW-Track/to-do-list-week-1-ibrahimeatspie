const express = require("express");
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON request body

const prisma = new PrismaClient();
const PORT = 4000;
const { auth } = require("./middleware/middleware");

app.get("/", auth, async (req, res) => {
  //write prisma code to insert into the database
  console.log("Request Received");
  const newPost = await prisma.post.create({
    data: {
      content: "This is a sample post content",
    },
  });
  res.status(200).json(newPost);
});

app.post("/insertTask", auth, async (req, res) => {
  const id = req.user.sub;
  const task = req.body.task;
  console.log("Request Received");
  console.log(id, task);
  try {
    const newPost = await prisma.post.create({
      data: {
        content: task,
        user: id,
      },
    });
    res.status(200).json(newPost);
  } catch (e) {
    res.status(400).json({ message: e });
  }
});

app.get("/getTasks", auth, async (req, res) => {
  const id = req.user.sub;
  console.log("Request Received");
  try {
    const tasks = await prisma.post.findMany({
      where: {
        user: id,
      },
    });
    res.status(200).json(tasks);
  } catch (e) {
    res.status(400).json({ message: e });
  }
})

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is Successfully Running, on " + PORT);
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
