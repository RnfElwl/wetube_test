const join = (req, res) => res.send("Join");
const edit = (req, res) => res.send("Edit User");
const remove = (req, res) => res.send("Remove User");
const login = (req, res) => res.send("Login");
const logout = (req, res) => res.send("Logout");
const see = (req, res) => res.send("See User");

export { join, edit, remove, login };
