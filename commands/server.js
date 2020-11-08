module.exports ={
    name : 'server',
    description : 'Check Server Info',
    execute(message, args){
        message.channel.send(`Username : ${message.author.username}\nID : ${message.author.id}`);
    }
};