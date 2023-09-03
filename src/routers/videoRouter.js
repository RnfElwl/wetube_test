import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  deleteVideo,
  upload,
} from "../controller/videoController";
const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id/delete", deleteVideo);
export default videoRouter;
