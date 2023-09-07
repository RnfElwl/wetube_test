import Video from "../models/Video";

const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    return res.render("server-error", { error });
  }
};
const watch = (req, res) => {
  const { id } = req.params;

  res.render("watch", { pageTitle: `Watching:` });
};
const getEdit = (req, res) => {
  const { id } = req.params;

  res.render("edit", { pageTitle: `Editing:` });
};
const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  return res.redirect(`/videos/${id}`);
};
const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload Video" });
const postUpload = (req, res) => {
  const { title } = req.body;
  return res.redirect("/");
};
const search = (req, res) => res.send("Search");
const deleteVideo = (req, res) => res.send("Delete Video");

export {
  home,
  watch,
  getEdit,
  postEdit,
  search,
  deleteVideo,
  getUpload,
  postUpload,
};
