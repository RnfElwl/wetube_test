import express from "express";

const videoRouter = express.Router();

const handleWatchVidoe = (req, res) => res.send("Watch Video");

videoRouter.get("/watch", handleWatchVidoe);

export default videoRouter;
