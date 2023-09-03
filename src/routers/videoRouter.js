import express from "express";
import {
  watch,
  edit,
  deleteVideo,
  upload,
} from "../controller/videoController";
const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id", watch);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deleteVideo);
export default videoRouter;
