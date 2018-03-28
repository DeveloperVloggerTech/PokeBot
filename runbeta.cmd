@echo off

title PokeBot Beta Console

echo Welcome to the PokeBot Beta Console.
echo If you want to self-host this bot, please continue by executing the following steps:
echo 1. You may need to go into the code and comment out anything that relates to Discord Bot List, as this will cause errors when self-hosting.
echo 2. Create a config.json file and include the token of your bot user so that the bot does not error out when connecting to Discord Servers.
echo 3. You will need to edit this file that you ran, and remove the "git pull" line. This causes errors as it will try to pull from the PokeBot git.
echo 4. Finally, you must credit the developers (Universe Development Group or PokeWorld Administrators will work fine).
              
:a
git pull
node test.js
goto a
