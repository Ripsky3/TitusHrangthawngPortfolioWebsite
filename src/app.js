const express = require("express");
const cors = require("cors");
const hbs = require("hbs");

const app = express();
app.use(cors());

const PORT = 4000;
app.get("", (req, res) => {
    res.send('Successful response.');
})

app.get("/about", (req, res) => {
    res.send('Successful response.');
})

app.listen(PORT, () => {
    console.log("Listening on port: " + PORT);
})