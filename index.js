import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/submit", (req, res) => {
    res.render("index.ejs");
  });

app.post("/submit", (req, res) => {
  
  const email=req.body.email;
  console.log(email);
  res.render("success.ejs",{name:email});
});
app.listen(5000, () => {
  console.log("listening on port 5000");
});
