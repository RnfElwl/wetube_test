import express from "express";

const app = express();
const PORT = 4000;
console.log("start!");

const handleLIstening = () => console.log("Server listenting");

app.listen(PORT, handleLIstening);
