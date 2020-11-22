const F1 = require("./f1bot")

let bot = new F1.F1Bot()
bot.init()

process.on('SIGINT', ()=>{
  bot.close()
})