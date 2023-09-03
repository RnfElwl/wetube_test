const fakeUser = {
  username: "RnfElwl",
  loggedIn: false,
};
let videos = [
  {
    title: "Hello",
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 0,
  },
  {
    title: "Video #2",
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Whatsup",
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
const search = (req, res) => res.send("Search");
const deleteVideo = (req, res) => res.send("Delete Video");
const upload = (req, res) => res.send("Upload");

export { trending, watch, getEdit, postEdit, search, deleteVideo, upload };
