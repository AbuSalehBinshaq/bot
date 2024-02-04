const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end(`
    <html>
      <head>
        <title>Your Web View</title>
      </head>
      <body style="margin: 0; padding: 0;">
        <iframe width="100%" height="100%" src="https://axocoder.vercel.app/" frameborder="0" allowfullscreen></iframe>
      </body>
    </html>`);
});

server.listen(3000, () => {
  console.log("Server Online because of Axo Coder ✅!!");
});
const Discord = require("discord.js");
const {
  Client,
  Intents,
  MessageEmbed,
  MessageActionRow,
  MessageButton,
} = require("discord.js");
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
  ],
});
var cooldown = new Set();
const fs = require("fs");
//----------------------------------------------------------------------\\
const {
  TOKEN,
  adminRoleID,
  idserver,
  ticketCategoryID,
  prefix,
} = require("./config.json");

// config.json حط ذا الكود في ملف اسمه
//{
//    "TOKEN": "توكن البوت",
//    "adminRoleID": "ايدي رتبة الادارة الي تبغاهم يستقبلون التكت",
//    "idserver": "ايديي سيرفرك",
//    "ticketCategoryID": "ايدي الكاتاقوري الي تنفتح الرومات في"
//}

//ticketCount.json حط ذا الكود في ملف اسمه
//{
//    "ticketCount": "1"
//}
//----------------------------------------------------------------------\\

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//----------------------------------------------------------------------\\

// Code Help
