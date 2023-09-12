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

const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  console.log(title, description, hashtags);
  try {
    const video = new Video({
      title,
      description,
      hashtags: hashtags.split(",").map((word) => `#${word}`),
      createdAt: Date.now(),
      meta: {
        views: 0,
        rating: 0,
      },
    });
    await video.save();
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
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
