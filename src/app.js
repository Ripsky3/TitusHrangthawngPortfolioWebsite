const express = require("express");
const cors = require("cors");
const hbs = require("hbs");
const path = require("path");

const app = express();
app.use(cors());

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Set up handlebars engine and view location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));


const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
    res.render("index", {
        title: "Titus Hrangthawng"
    });
})

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About"
    });
})

app.get("/contact", (req, res) => {
    res.render("contact", {
        title: "Contact"
    });
})

app.get("/help/*", (req, res) => {
    res.send("help article not found");
})

app.get("*", (req, res) => {
    res.render("notfound", {
        title: "Page not found"
    });
})

app.listen(PORT, () => {
    console.log("Listening on port: " + PORT);
})