import express from "express";
import { join } from "../controller/videoController";
import trending from "../controller/userController";
const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;
