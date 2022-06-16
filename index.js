const TelegramApi=require('node-telegram-bot-api')

const linkPorn=[
    {link:"https://tlgrm.ru/_/stickers/412/801/41280125-4d5d-4b51-bb95-198a64e75833/1.webp"},
    {link:"https://tlgrm.ru/_/stickers/412/801/41280125-4d5d-4b51-bb95-198a64e75833/7.webp"},


]

const information=(chatId)=>{
    bot.sendMessage(chatId,"It is Bot about React")
             bot.sendSticker(chatId,"https://tlgrm.ru/_/stickers/412/801/41280125-4d5d-4b51-bb95-198a64e75833/2.webp")
             bot.sendMessage(chatId,"You can type some text, example -useState- and bot show you how you can use this hook")
}

const token="5476206530:AAEqMTITbTar2Gtk1_KQiIjbpdsLcAKLlGA"

const bot=new TelegramApi(token,{polling:true})

const porn=(chatId,text)=>{
    let i=0
    if(text==="next"){
    i++
    }
    if(text==="prev"){
        i--
    }
    bot.sendSticker(chatId,linkPorn[i].link)
}


const start=()=>{
    bot.setMyCommands([
        {command:"/start",description:"start bot"},
        {command:"/info",description:"information about bot"},
        {command:"/pron",description:"im sure what you know"}
    ])
    
    bot.on("message",async msg=>{
        const text=msg.text
    
        const chatId=msg.chat.id
    
        if(text==="/start")
        bot.sendMessage(chatId,"hello world")

        if(text==="/info") information(chatId)

        if(text==="/pron")porn(chatId,text)
             
    })

}
start()