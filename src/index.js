require('dotenv').config();

const { Client, IntentsBitField, Embed, EmbedBuilder, Permissions, MessageManager, ActionRow, MembershipScreeningFieldType, PermissionsBitField, ActivityType, ClientVoiceManager} = require('discord.js');
const { QuickDB } = require('quick.db')
const db = new QuickDB();

const client = new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildIntegrations,
    ]
});

client.on('ready', () =>{
    console.log(`${client.user.tag} is online`)

    client.user.setActivity({
        name: `the unwashed masses`,
        type: ActivityType.Watching,
    });
})

client.on("messageCreate", async message => {

    let prefix = await db.get(`prefix_${message.guild.id}`)
    if(prefix == null) prefix = '?';

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    

    // message array var

    const messageArray = message.content.split(" ")
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];

    //test command

    if(command === 'test'){
        message.channel.send('the test works')
    }

    //membercount  

    if(cmd === `${prefix}membercount`){
        message.channel.send(`**Server Members:** ${message.guild.memberCount}`)
    }

    //commands
    
    if(command === 'hey') {
        console.log("how did we get here")
        message.channel.send('Hey!');
    }

    if(command === 'ping') {
        message.channel.send('Pong!');
    }

    if(command === 'add') {
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value;

        message.channel.send(`The sum of numbers is ${num1 + num2}`)
    }

    if(command === 'simp') {
        const embed = new EmbedBuilder()
            .setTitle('Your simpage')
            .setDescription(`You have a simpage of ${Math.floor(Math.random()* (100 - 1) + 1)}% today`)
            .setColor('Random')

            message.channel.send({ embeds: [embed]});
    }

    //work in progress
    if(command === 'admincheck'){
        if(!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.channel.send("You are not an admin");
        message.channel.send('you are an admin');
    }      


    if(command === 'prefix') {
         message.channel.send(` current prefix is: ${prefix}`)
    }

    if(command === 'setprefix') {
        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.channel.send("You do not have the permissions to change the bots prefix");
        const prefix = messageArray[1];
        const newPrefix = await db.set(`prefix_${message.guild.id}`, prefix);
        
        const embed = new EmbedBuilder()
        .setColor("Blue")
        .setDescription(`:white_check_mark: Your prefix has been changed to **${newPrefix}**`)
   
        message.channel.send({ embeds: [embed]});
    }


    if(command === 'defaultprefix') {
        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.channel.send("You do not have the permissions to change the bots prefix");
        const prefix = '?';
        const embed = new EmbedBuilder()
        .setColor("Red")
        .setDescription(`:white_check_mark: Your prefix has been changed to **?**`)

        await db.set(`refix_${message.guild.id}`, prefix)

        message.channel.send({ embeds: [embed]});
    }


});


client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName === 'hey') {
        console.log("HEH?")
        interaction.reply('Hey!');
    }

    if(interaction.commandName === 'ping') {
        interaction.reply('Pong!');
    }

    if(interaction.commandName === 'add') {
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value;

        interaction.reply(`The sum of numbers is ${num1 + num2}`)
    }

    if(interaction.commandName === 'simp') {
        const embed = new EmbedBuilder()
            .setTitle('Your simpage')
            .setDescription(`You have a simpage of ${Math.floor(Math.random()* (100 - 1) + 1)}% today`)
            .setColor('Random')

        interaction.reply({ embeds: [embed]});
    }

    if(interaction.commandName === 'admincheck'){
        if(!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.channel.send("You are not an admin");
        message.channel.send('you are an admin');
    }      


    if(interaction.commandName === 'prefix') {
         message.channel.send(` current prefix is: ${prefix}`)
    }

    if(interaction.commandName === 'setprefix') {
        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.channel.send("You do not have the permissions to change the bots prefix");
        const prefix = messageArray[1];
        const newPrefix = await db.set(`prefix_${message.guild.id}`, prefix);
        
        const embed = new EmbedBuilder()
        .setColor("Blue")
        .setDescription(`:white_check_mark: Your prefix has been changed to **${newPrefix}**`)
   
        message.channel.send({ embeds: [embed]});
    }


    if(interaction.commandName === 'defaultprefix') {
        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.channel.send("You do not have the permissions to change the bots prefix");
        const prefix = '?';
        const embed = new EmbedBuilder()
        .setColor("Red")
        .setDescription(`:white_check_mark: Your prefix has been changed to **?**`)

        await db.set(`refix_${message.guild.id}`, prefix)

        message.channel.send({ embeds: [embed]});
    }
})


client.login(process.env.TOKEN);