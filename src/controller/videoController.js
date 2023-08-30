const trending = (req, res) => res.render("home", { pageTitle: "Home" });
const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
const search = (req, res) => res.send("Search");
const deleteVideo = (req, res) => res.send("Delete Video");
const upload = (req, res) => res.send("Upload");

export { trending, see, edit, search, deleteVideo, upload };
