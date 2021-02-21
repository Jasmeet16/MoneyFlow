const express = require("express");
const bodyParser = require("body-parser");
const { solve } = require('./controllers/solveData');
const ejs = require("ejs");
const app = express();

let persons;
let network;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  res.render("home");
});

app.post("/", (req, res) => {
  //console.log(req.body[`person1`]);
  try {
    persons = [];
    for (let i = 1; i <= Object.keys(req.body).length; i++) {
      persons.push(req.body[`person${i}`]);
    }
    //console.log(persons);
    res.redirect("expenses");
  } catch (error) {
    console.log(error);
  }
});

app.get("/expenses", (req, res) => {
  res.render("expenses", { data: persons });
});

app.post("/expenses", (req, res) => {
  network = req.body;
  res.redirect("network");
});

app.get("/network", (req, res , next) => {
  req.persons = persons;
  req.network = network;
  next();
} , solve );

app.get('/help', (req, res) => {
  res.render('help');
})

app.listen(3000, () => {
  console.log(`server running on port 3000`);
});
