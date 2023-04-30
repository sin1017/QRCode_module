const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const engine = require("ejs-locals");
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.engine("ejs", engine);
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`http://localhost${port}`);
})