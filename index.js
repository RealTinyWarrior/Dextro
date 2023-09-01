const { BotIntents, prefix } = require("./src/data");
const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client({ intents: BotIntents });

client.on("ready", () => {
    client.user.setPresence({ activities: [{ name: "Brawl Stars | +=help" }] });
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    const cmd = message.content.slice(prefix.length).split(" ");
    const send = (m) => message.channel.send(m);

    console.log(cmd);
    if (cmd[0] === "help") send("Bot is currently under development");
});

client.login(process.env.TOKEN);
