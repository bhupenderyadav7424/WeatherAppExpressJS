const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8000;

// public static path
// console.log(path.join(__dirname, "../public/"));
const staticPath = path.join(__dirname, "../public/");
const templatePath = path.join(__dirname, "../templates/views/");
const partialsPath = path.join(__dirname, "../templates/partials/");

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));


// routing
app.get("/", (req, res) => {
    // res.send("Welcome to my palace, I love to join at dinner at home.");
    res.render("index");
});

app.get("/about", (req, res) => {
    // res.send("Welcome to my palace, I love to join at dinner at about us.");
    res.render("about");
});

app.get("/weather", (req, res) => {
    // res.send("Welcome to my palace, I love to join at dinner in a good weather.");
    res.render("weather");
});

app.get("*", (req, res) => {
    // res.send("OOP's, I think this page doesn't exist. 404 Error.");
    res.render("404-error", {
        errorMessage: "OOP's, page doesn't exist",
    });
});

app.listen(port, () => {
    console.log(`App is listening at port no. ${port}`);
});