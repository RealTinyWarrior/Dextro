const { prefix } = require("./data");

module.exports = {
    input: (msg) => {
        const arr = msg.content.slice(prefix.length).split(" ");
        return arr.filter((elm) => elm !== "");
    },

    combine: (msg) => {
        return msg.filter((elm, i) => i !== 0);
    },
};
