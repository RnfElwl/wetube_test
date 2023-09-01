const fakeUser = {
  username: "RnfElwl",
  loggedIn: false,
};

const trending = (req, res) => {
  const videos = [1, 2, 3, 4, 5, 6, 8, 9, 10];
  return res.render("home", { pageTitle: "Home", fakeUser: fakeUser, videos });
};
const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
const search = (req, res) => res.send("Search");
const deleteVideo = (req, res) => res.send("Delete Video");
const upload = (req, res) => res.send("Upload");

export { trending, see, edit, search, deleteVideo, upload };
