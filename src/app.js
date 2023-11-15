const express = require("express");
const cors = require("cors");
const hbs = require("hbs");
const path = require("path");

const app = express();
app.use(cors());

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");

// Set up handlebars engine and view location
app.set("view engine", "hbs");

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));


const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
    res.render("index");
})

app.listen(PORT, () => {
    console.log("Listening on port: " + PORT);
})