# Hypixel Bed Wars Defense Assignment Bot
This is a simple Discord bot that assigns chief and backup defenders for a Bed Wars game on Hypixel based on predetermined assignments based on maps. However, it also has a functionality which allows for random assignments of defenders if needed. This application comes in two "flavors," [Python](https://www.python.org/) and [Node.JS](https://nodejs.org/en/).

# Installation - Python Edition
Make sure you have at least Python 3.8 installed from either [Python.org](https://www.python.org/downloads/) or the [Microsoft Store (for Windows 10 ONLY)](https://www.microsoft.com/en-us/p/python-38/9mssztt1n39l?activetab=pivot:overviewtab). For some reason, the Microsoft Store edition of Python has given me more success than the python.org version, but you can figure out what you want to use. If you are using macOS or a Linux distribution, you can install the appropriate versions of Python. For the purposes of these tutorial, we will assume you are using Windows 10. The commands are more or less the same, so no matter what OS you have, you should be able to run it successfully. After you have installed Python, you need to install [discord.py](https://pypi.org/project/discord.py/). There are two versions of discord.py available, one with only text based support and one with both text and voice based support. Since this is a very basic bot, you need not worry about installing the voice edition. Open up Command Prompt and type in the following command: 
`pip3 install discord.py`. It may show you some warnings about an outdated pip install, but that is not really an issue in this case. Running that command gives you support for Discord-specific commands that are present in the code. After you've installed the dependencies needed, you should be good to go! Follow these steps:

 1. Download the latest bot.py from Releases. Using your favorite code editor (Visual Studio Code, Notepad ++, Notepad?), make sure to customize the bot.py commands and responses to your heart's content, as the version from the Releases page is a template you need to edit.
 2. On the very last line of the bot.py file, you need to edit the "TOKEN" field with your Discord bot token. You can find the instructions on how to do so here.
 3. In order to work with the library and the Discord API in general, we must first create a Discord Bot account.

Creating a Bot account is a pretty straightforward process.

1.  Make sure you’re logged on to the  [Discord website](https://discordapp.com/).
    
2.  Navigate to the  [application page](https://discordapp.com/developers/applications)
    
3.  Click on the “New Application” button.
    
    > ![The new application button.](https://discordpy.readthedocs.io/en/latest/_images/discord_create_app_button.png)
    
4.  Give the application a name and click “Create”.
    
    > ![The new application form filled in.](https://discordpy.readthedocs.io/en/latest/_images/discord_create_app_form.png)
    
5.  Create a Bot User by navigating to the “Bot” tab and clicking “Add Bot”.
    
    > -   Click “Yes, do it!” to continue.
    >     
    > 
    > ![The Add Bot button.](https://discordpy.readthedocs.io/en/latest/_images/discord_create_bot_user.png)
    
6.  Make sure that  **Public Bot**  is ticked if you want others to invite your bot.
    
    > -   You should also make sure that  **Require OAuth2 Code Grant**  is unchecked unless you are developing a service that needs it. If you’re unsure, then  **leave it unchecked**.
    >     
    > 
    > ![How the Bot User options should look like for most people.](https://discordpy.readthedocs.io/en/latest/_images/discord_bot_user_options.png)
    
7.  Copy the token using the “Copy” button.
    
    > -   **This is not the Client Secret at the General Information page**
    >     
    > 
    > Warning
    > 
    > It should be worth noting that this token is essentially your bot’s password. You should  **never**  share this to someone else. In doing so, someone can log in to your bot and do malicious things, such as leaving servers, ban all members inside a server, or pinging everyone maliciously.
    > 
    > The possibilities are endless, so  **do not share this token.**
    > 
    > If you accidentally leaked your token, click the “Regenerate” button as soon as possible. This revokes your old token and re-generates a new one. Now you need to use the new token to login.
    

And that’s it. You now have a bot account and you can login with that token.

## Inviting Your Bot[](https://discordpy.readthedocs.io/en/latest/discord.html#inviting-your-bot "Permalink to this headline")

So you’ve made a Bot User but it’s not actually in any server.

If you want to invite your bot you must create an invite URL for it.

1.  Make sure you’re logged on to the  [Discord website](https://discordapp.com/).
    
2.  Navigate to the  [application page](https://discordapp.com/developers/applications)
    
3.  Click on your bot’s page.
    
4.  Go to the “OAuth2” tab.
    
    > ![How the OAuth2 page should look like.](https://discordpy.readthedocs.io/en/latest/_images/discord_oauth2.png)
    
5.  Tick the “bot” checkbox under “scopes”.
    
    > ![The scopes checkbox with "bot" ticked.](https://discordpy.readthedocs.io/en/latest/_images/discord_oauth2_scope.png)
    
6.  Tick the permissions required for your bot to function under “Bot Permissions”.
    
    > -   Please be aware of the consequences of requiring your bot to have the “Administrator” permission.
    >     
    > -   Bot owners must have 2FA enabled for certain actions and permissions when added in servers that have Server-Wide 2FA enabled. Check the  [2FA support page](https://support.discordapp.com/hc/en-us/articles/219576828-Setting-up-Two-Factor-Authentication)  for more information.
    >     
    > 
    > ![The permission checkboxes with some permissions checked.](https://discordpy.readthedocs.io/en/latest/_images/discord_oauth2_perms.png)
    
	  >    Now the resulting URL can be used to add your bot to a server. Copy and paste the URL into your browser, choose a server to invite the bot to, and click “Authorize”.


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE5OTIyODAwMTQsLTE0MDU4NTM4NzJdfQ
==
-->