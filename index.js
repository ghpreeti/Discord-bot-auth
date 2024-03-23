const { Client, GatewayIntentBits, Message } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] ,
});

client.on("messageCreate",(message)=>{
    if(message.author.bot) return;
    if(message.content.startsWith('create')){
        const url = message.content.split('create')[1];
        return message.reply({
            content:"Genrate short ID for "+url,
        });
    }
    message.reply({
        content:"Hi from bot",
    })
    // console.log(message.content);
});

client.on('interactionCreate',(interaction)=>{
    console.log(interaction);
    interaction.reply('Pong!!!');
})

client.login("MTIyMDgwMTQxNjc4MDg0MTA4MA.GjfxZk.qsDtMv3udCkJn61v9Z83NUkVtcsi4psNeDG7Cs");