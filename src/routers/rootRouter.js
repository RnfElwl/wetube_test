import express from "express";
import { edit, remove, logout, see } from "../controller/userController";
const rootRouter = express.Router();

rootRouter.get("/edit", edit);
rootRouter.get("/remove", remove);
rootRouter.get("/logout", logout);
rootRouter.get("/:id", see);

export default rootRouter;
