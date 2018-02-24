exports.run = async (bot, msg, args) => {
    msg.guild.fetchMembers().then(guild =>
        {
membersList = guild.members.array();  
let selectedUser1 = membersList[Math.floor(Math.random() * membersList.length)].user;
let selectedUser2 = membersList[Math.floor(Math.random() * membersList.length)].user;
let selectedUser3 = membersList[Math.floor(Math.random() * membersList.length)].user;

    let stories = 
    [
        `Story 1 Alee says it\'s coming soon!.`,
        `Story 2 ${selectedUser1.username} jumps into the window then ${selectedUser2.username} saves ${selectedUser1.username} and ${selectedUser3.username} claps.`,
    ];
let storySelected = [Math.floor(Math.random() * stories.length)]; 
msg.channel.send(stories[storySelected]);
        });
};

exports.conf = {
    aliases: [],
    guildOnly: true,
  };
  
  exports.help = {
    name: 'story',
    description: 'Tells you a story.',
    category: 'Fun',
  };
  