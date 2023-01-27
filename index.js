//telegram bot setup
const nodeTelegramBotApi = require("node-telegram-bot-api");
require('dotenv').config();

// open API setup
var weather = require('openweather-apis');
weather.setLang('en');
weather.setCity('Delhi');
weather.setUnits('metric');
weather.setAPPID('5d233127bcca19dc10054acb912f6a4f');

const token=process.env.TOKEN;

const bot = new nodeTelegramBotApi(token, {polling: true});

bot.on('message', (message)=>{
    let chat_id = message.from.id;

    weather.getTemperature(function(err, temp){
        bot.sendMessage(chat_id , `Current temperature of Delhi is ${temp} degree centigrade`)  
    }); 

    setInterval(() => {
        weather.getTemperature(function(err, temp){
            bot.sendMessage(chat_id , `Current temperature of Delhi is ${temp} degree centigrade`)  
        }); 
    }, 3600000);
    
});
 