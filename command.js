const { REST, Routes } = require('discord.js');

const commands = [{
    name:"ping",
    description: "Ping Pong!",
},
];

const rest = new REST({ version: '10' }).setToken("MTIyMDgwMTQxNjc4MDg0MTA4MA.GjfxZk.qsDtMv3udCkJn61v9Z83NUkVtcsi4psNeDG7Cs");


(async ()=>{
try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands('1220801416780841080'), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();