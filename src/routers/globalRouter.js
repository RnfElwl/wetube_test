import express from "express";
import { join, login } from "../controller/videoController";
import { trending, search } from "../controller/userController";
const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("login", login);
globalRouter.get("/search", search);

export default globalRouter;
