const express = require("express");
const server = express();

server.all("/", (req, res) => {
    res.send("Bot is running!");
});

function alive() {
    server.listen(3000, () => {
        console.log("Bot is ready, listening to port 3000!");
    });
}

module.exports = alive;
