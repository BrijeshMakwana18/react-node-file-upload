var express = require("express");
var app = express();
var multer = require("multer");
var cors = require("cors");

app.use(cors());

var storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

app.post("/upload", upload.array("file", 4), (req, res) => {
  try {
    res.send(req.files);
  } catch (error) {
    console.log(error);
    res.send(400);
  }
});

app.listen(8080, function () {
  console.log("App running on port 8080");
});
