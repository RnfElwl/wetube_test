const trending = (req, res) => res.send("Home Page Videos");
const see = (req, res) => res.send("Watch");
const edit = (req, res) => res.send("Edit");
const search = (req, res) => res.send("Search");
const deleteVideo = (req, res) => res.send("Delete Video");
const upload = (req, res) => res.send("Upload");

export { trending, see, edit, search, deleteVideo, upload };
