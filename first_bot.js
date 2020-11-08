//Learning Basic Command Handling
const Discord           = require('discord.js');
const client            = new Discord.Client();
const { prefix, token } =   require('./config.json');

client.on('message', async message => {
    //arguments
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    //rest of code

    //command |ping
    if ( message.content.startsWith === `${prefix}ping` ){
        message.channel.send('Pong!');
    //command |server
    }else if(message.content === `${prefix}server`){
        message.channel.send(`Server Name : ${message.guild.name}\nTotal Members : ${message.guild.memberCount}`);
    //command |userinfo
    }else if(message.content === `${prefix}userinfo`){
        message.channel.send(`Username : ${message.author.username}\nID : ${message.author.id}`);
    //command |args-info
    }else if(command === 'args-info'){
        if(!args.length){
            return message.channel.send(`You didn't profive any arguments, ${message.author}`);
        }else if(args[0] === 'foo'){
            return message.channel.send('bar');
        }

        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    //command |kick
    }else if(command === 'kick'){
        if (!message.mentions.users.size){
            return message.reply('you need to tag the person to kick them');
        }
        const taggedUser = message.mentions.users.first();

        message.channel.send(`You wanted to kick : ${taggedUser.username}`);
    //command |avatar
    }else if(command === 'avatar'){
        if(!message.mentions.users.size){
            return message.channel.send(`Your Avatar : <${message.author.displayAvatarURL({ format : "png", dynamic : true})}>`);
        }

        const avatarList = message.mentions.users.map(user =>{
            return `${user.username}'s avatar : <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
        });

        message.channel.send(avatarList);
    //command |prune
    }else if(command === 'prune'){
        const amount = parseInt(args[0] +1);

        if(isNaN(amount)){
            return message.reply('that\'s not a valid number');
        }else if(amount <=1 || amount > 100){
            return message.reply('please input number between 1 and 99');
        }

        message.channel.bulkDelete(amount, true).catch(err =>{
            console.error(err);
            message.channel.send('there was an error trying to prune message');
        });
    }
});

client.login(token);