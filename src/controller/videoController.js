const trending = (req, res) => res.render("home");
const see = (req, res) => res.render("watch");
const edit = (req, res) => res.send("Edit");
const search = (req, res) => res.send("Search");
const deleteVideo = (req, res) => res.send("Delete Video");
const upload = (req, res) => res.send("Upload");

export { trending, see, edit, search, deleteVideo, upload };
