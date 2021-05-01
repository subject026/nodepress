const express = require("express");
var mustache = require("mustache-express");

// Register '.mustache' extension with The Mustache Express
const app = express();

app.engine("mst", mustache());
app.set("view engine", "mst");
app.set("views", __dirname + "/views");

// app.engine("mst", mustache(VIEWS_PATH + "/partials", ".mst"));

app.get("/", (req, res, next) => {
  const data = {
    otherData: "Something Else"
  };

  res.status(200).render("index", {
    title: "waheyyyyyyooooooooo",
    names: [{ name: "steve" }, "jason", "archibald"]
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
