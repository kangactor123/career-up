const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const AUTH0_DOMAIN = "dev-vqfdvk00fmm0o8rr.us.auth0.com";

server.use(middlewares);
server.use(async (req, res, next) => {
  if (await isAuthorized(req)) {
    next();
  } else {
    res.sendStatus(401);
  }
});

server.get("/user", (req, res) => {
  res.jsonp({
    ...req.user,
    view_count: 249,
    update_count: 100,
    courses: [
      { courseId: 1, done: true },
      { courseId: 4, done: false },
    ],
  });
});

server.use(jsonServer.bodyParser);
server.post("/posts", (req, res, next) => {
  req.body.createdAt = new Date().toISOString();
  req.body.author = {
    name: req.user.name,
    picture: req.user.picture,
    email: req.user.email,
  };
  next();
});

server.get("/my-network", (req, res) => {
  res.jsonp({
    connectionCount: 811,
    contactCount: 30492,
    eventCount: 0,
    pageCount: 1,
    user: req.user,
  });
});

server.get("/apply-status", (req, res) => {
  res.jsonp({
    myJobsCount: 13,
    myOnlineClassesCount: 11,
    mySavedUpdatesCount: 1,
  });
});

server.use(router);
server.listen(4000, () => {
  console.log("JSON Server is running");
});

async function isAuthorized(req) {
  try {
    const Authorization = req.headers.authorization;

    const res = await fetch(`https://${AUTH0_DOMAIN}/userInfo`, {
      headers: {
        Authorization,
      },
    });

    const json = await res.json();
    req.user = json;

    return true;
  } catch (e) {
    return false;
  }
}
