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
      return `<span class="container-link desc-title show-move">
      ${userKey}
      <div class="userkey-popover_target--show arrow-up">
                                    <div class="desc-show-userkey default">
                                        <div class="show-handle">
                                            <a href="/?logout=true" class="handle-exit">Đăng xuất</a>
                                        </div>
                                    </div>
                               </div>
      </span>`
    } else {
      return `<a href="/register" class="sing-up container-link desc-title start">Đăng Ký</a>
              <div class="nav-wall"></div>
              <a href="/login" class="log-in container-link desc-title">Đăng Nhập</a>`
    }

  },
  notification: (userKey, notificationMessage) => {
    if (userKey) {
      return `<div class="desc-show default">
                                <div class="show-avatar">
                                    <span class="title-avatar text-notification-message">${notificationMessage}</span>
                                </div>
                            </div>`
    } else {
      return `<div class="desc-show default">
                                <div class="show-avatar">
                                    <img src="wrapperImage/img/user.jpg" alt="" class="avatar-user center">
                                    <span class="title-avatar">Đăng nhập để xem Thông báo</span>
                                </div>
                                <div class="btn-log_sign">
                                    <a class="btn-sing_up default-btn " src="" href="/register"
                                        style="text-decoration: none; color:#000">Đăng ký</a>
                                    <a class="btn-log_in default-btn " href="/login"
                                        style="text-decoration: none; color:#000">Đăng nhập</a>
                                </div>
                            </div>`
    }
  },
  handleNone: (userKey, handle) => {
    if (userKey) {
      return handle
    } else {
      return `<a href="" class="become-seller desc_container wall flex">Trở thành người bán Shoppe</a>`;
    }
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
