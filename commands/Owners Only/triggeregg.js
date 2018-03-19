/** **************************************
 *
 *   TriggerEgg: Plugin for PokeBot that manages community events.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * *************************************/

exports.run = async (bot, msg, args) => {
    if (!['242775871059001344', '247221105515823104', '236279900728721409'].includes(msg.author.id)) {
      msg.reply('Nope! You need the person who created this bot to use this command.');
    }
    else {
        msg.guild.channels.find('name', 'pokeegghunt').send(':egg: **An egg is available!** *Someone needs to battle for it though...*');
    }
  };
  
  exports.conf = {
    aliases: [],
    guildOnly: true,
  };
  
  exports.help = {
    name: 'triggeregg',
    description: 'Sends an egg out for players to collect',
  };
  