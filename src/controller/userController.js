import User from "../models/User";

const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
const postJoin = async (req, res) => {
  const { name, username, email, password, password2, location } = req.body;
  const pageTitle = "Join";
  if (password !== password2) {
    return res.render("join", {
      pageTitle: pageTitle,
      errorMessage: "Password confirmation does not match.",
    });
  }
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    return res.render("join", {
      pageTitle: pageTitle,
      errorMessage: "This username/email is already taken.",
    });
  }

  await User.create({ name, username, email, password, location });
  return res.redirect("/login");
};
const edit = (req, res) => res.send("Edit User");
const remove = (req, res) => res.send("Remove User");
const login = (req, res) => res.send("Login");
const logout = (req, res) => res.send("Logout");
const see = (req, res) => res.send("See User");

export { getJoin, postJoin, edit, remove, login, logout, see };
