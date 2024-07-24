const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const app = express();
const port = 3000;
const session = require('express-session');
const router = require("./routes");
const db = require("./app/config/db/index");


app.use("/static", express.static(path.join(__dirname, "node_modules")));

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);

const hbsHelper = {
  removeDomain: (email) => {
    return email.split('@')[0];
  },
  username: (userKey) => {
    if (userKey) {
      return `<span class="container-link desc-title">${userKey}</span>`
    } else {
      return `<a href="register" class="sing-up container-link desc-title start">Đăng Ký</a>
              <div class="nav-wall"></div>
              <a href="login" class="log-in container-link desc-title">Đăng Nhập</a>`
    }

  },
  notification: (message) => {
    return ` <div class="desc-show default">
                                <div class="show-avatar">
                                    <img src="wrapperImage/img/user.jpg" alt="" class="avatar-user center" style="display: none;">
                                    <span class="title-avatar" style=" color: red; font-size: 30px">${message}</span>
                                </div>
                            </div>`
  },
  handleNone: (none) => {
    return `
      
    `
  }

}

app.use(session({
  secret: 'your_secret_key', // Thay thế bằng khóa bí mật của bạn
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Đặt secure: true nếu sử dụng HTTPS
}));


app.use(express.json());
app.use(methodOverride("_method"));
app.use(morgan("combined"));
app.use("/", router);
db.connect();

app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "resource", "views", "layouts"),
    partialsDir: path.join(__dirname, "resource", "views", "partials"),
    helpers: hbsHelper,
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource", "views"));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
