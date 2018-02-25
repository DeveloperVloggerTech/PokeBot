exports.run = async (bot, msg) => {
  msg.guild.fetchMembers().then(guild =>
  {
    const membersList = guild.members.array();
    const selectedUser1 = membersList[Math.floor(Math.random() * membersList.length)].user;
    const selectedUser2 = membersList[Math.floor(Math.random() * membersList.length)].user;
    const selectedUser3 = membersList[Math.floor(Math.random() * membersList.length)].user;

    const stories =
    [
      'Story 1 Alee says it\'s coming soon!.',
      `Story 2 ${selectedUser1.username} jumps into the window then ${selectedUser2.username} saves ${selectedUser1.username} and ${selectedUser3.username} claps.`,
    ];
    const storySelected = [Math.floor(Math.random() * stories.length)];
    const embed = new Discord.RichEmbed()
    .setColor(0x00ae86)
    .setTitle(`Pokebot Storytime`)
    .setDescription(stories[storySelected])
    .setFooter('PokeBot Beta');
    msg.channel.send( { embed } );
  });
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'story',
  description: 'Tells you a story.',
};
