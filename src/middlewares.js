const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Wetube";
  res.locals.loggedInUser = req.session.user;
  next();
};

const protectorMiddleware = (req, res, next) => {
  if (req.session.loggendIn) {
    return next();
  } else {
    return res.redirect("/login");
  }
};

const publicOnlyMiddleware = (req, res, next) => {
  if (!req.session.loggendIn) {
    return next();
  } else {
    return res.redirect("/");
  }
};
export { localsMiddleware, protectorMiddleware, publicOnlyMiddleware };
