const Discord = require("discord.js")
const client = new Discord.Client()
require('events').EventEmitter.prototype._maxListeners = 100;
client.on("ready", () => {
  console.log(`Signed in as ${client.user.tag}!`)
})
client.on("message", msg => { //Edit !command to whatever name you'd like. Make sure it is preceded by a "!." Copy this, and the next 4 lines as many times as you want.
  if (msg.content === "!command") { 
    msg.reply("\nplaceholder text") //Important: keep the \n there. It is much more cleaner. Between that and your text, make sure there is no space. In other words, make sure it is like: \nThis is some sample text. The same goes for multiple line responses: \nThis is some sample text.\nThis is also some sample text.
  }
})
client.login("TOKEN"); //Make sure that your bot token is surrounded by quotes. In other words, replace the TOKEN value with your bot token value.