const { BotIntents, prefix } = require("./data");
const Discord = require("discord.js");
const alive = require("./server");

require("dotenv").config();

const client = new Discord.Client({ intents: BotIntents });

client.on("ready", () => {
    client.user.setPresence({ activities: [{ name: "Brawl Stars • +=help" }] });
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    const cmd = message.content.slice(2).split(" ");
});

alive();
client.login(process.env.TOKEN);
