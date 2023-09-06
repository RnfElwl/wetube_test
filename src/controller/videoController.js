const fakeUser = {
  username: "RnfElwl",
  loggedIn: false,
};
let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 0,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
];
const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", fakeUser: fakeUser, videos });
};
const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id];
  res.render("watch", { pageTitle: `Watching: ${video.title}`, video });
};
const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id];
  res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};
const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id].title = title;
  return res.redirect(`/videos/${id}`);
};
const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload Video" });
const postUpload = (req, res) => {
  const { title } = req.body;
  const newVideo = {
    title,
    rating: 0,
    comments: 0,
    createdAt: "just now",
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
const search = (req, res) => res.send("Search");
const deleteVideo = (req, res) => res.send("Delete Video");

export {
  trending,
  watch,
  getEdit,
  postEdit,
  search,
  deleteVideo,
  getUpload,
  postUpload,
};
