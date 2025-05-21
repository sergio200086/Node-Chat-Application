const express = require("express");
const path = require("path");
const app = express();

//settings de mi aplicación
app.set("port", 3000);

//middlewares
app.use(express.static(path.join(__dirname, "public"))); //static files

//routes req = request, res = response
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(app.get("port"), () => {
  console.log(`App is running at http://localhost:${app.get("port")}`);
});
