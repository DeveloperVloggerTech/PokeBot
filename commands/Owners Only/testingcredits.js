/** **************************************
 *
 *   Testing Credits: Plugin for PokeBot that modifies economy features.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = async (bot, msg) => {
  if (!['242775871059001344', '247221105515823104', '236279900728721409'].includes(msg.author.id)) return msg.reply('Nope! You need the person who created this bot to use this command.');

  let user;
  if (!msg.mentions.members.first()) {
    user = msg.author;
  } else {
    user = msg.mentions.members.first();
  }

  bot.plugins.economy.add(user.id, 1000);

  msg.channel.send('Added 1000 credits');
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'testingcredits',
  description: 'Modifies the credits of a user',
  usage: '@user <credits>',
};
