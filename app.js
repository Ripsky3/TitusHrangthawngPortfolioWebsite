const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 3000;

app.get("/", (req, res) => {
    res.send('Successful response.');
})

app.listen(3000, () => {
    console.log("Listening on port: " + PORT);
})