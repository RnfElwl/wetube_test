import express from "express";

const app = express();
const PORT = 4000;

const middeleware = (req, res, next) => {
  console.log("middle");
  next();
};
const handleHome = (req, res) => {
  return res.send("hello");
};

app.get("/", middeleware, handleHome);

const handleLIstening = () => console.log("Server listenting");

app.listen(PORT, handleLIstening);
