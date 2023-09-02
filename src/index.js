const { BotIntents, prefix } = require("./data");
const Sanitize = require("./sanitize");
const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client({ intents: BotIntents });

client.on("ready", () => {
    client.user.setPresence({ activities: [{ name: `Brawl Stars | ${prefix}help` }] });
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (msg) => {
    if (msg.author.bot || !msg.content.startsWith(prefix)) return;
    const cmd = Sanitize.input(msg);

    if (cmd[0] === "help") msg.channel.send("Bot is currently under development");
});

client.login(process.env.TOKEN);
