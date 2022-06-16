export default function information(msg,chatId){
    return bot.sendMessage(chatId,`your name is ${msg.chat.first_name} ${msg.chat.last_name}`)
}