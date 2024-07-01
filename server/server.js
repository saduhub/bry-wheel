const express = require('express');
const path = require("path");
const db = require("./config/connection");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

db.once("open", () => {
    console.log("Connection to db successful");
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

