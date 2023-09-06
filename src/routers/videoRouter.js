import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  deleteVideo,
  getUpload,
  postUpload,
} from "../controller/videoController";
const videoRouter = express.Router();

videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id/delete", deleteVideo);
export default videoRouter;
