import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 4000;

const logger = morgan("dev");

const home = (req, res) => {
  return res.send("hello");
};
const login = (req, res) => {
  return res.send("login");
};

app.use(logger);
app.get("/", home);
app.get("/login", login);

const handleLIstening = () =>
  console.log(`Server listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleLIstening);
