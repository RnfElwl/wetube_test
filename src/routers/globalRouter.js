import express from "express";
import { home, search } from "../controller/videoController";
import { getJoin, postJoin, login } from "../controller/userController";
const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.route("/join").get(getJoin).post(postJoin);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
