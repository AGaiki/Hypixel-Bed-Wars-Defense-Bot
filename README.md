# Hypixel Bed Wars Defense Assignment Bot
This is a simple Discord bot that assigns chief and backup defenders for a Bed Wars game on Hypixel based on predetermined assignments based on maps. However, it also has a functionality which allows for random assignments of defenders if needed. This application comes in two "flavors," [Python](https://www.python.org/) and [Node.JS](https://nodejs.org/en/).

# Installation - Python Edition
Make sure you have at least Python 3.8 installed from either [Python.org](https://www.python.org/downloads/) or the [Microsoft Store (for Windows 10 ONLY)](https://www.microsoft.com/en-us/p/python-38/9mssztt1n39l?activetab=pivot:overviewtab). For some reason, the Microsoft Store edition of Python has given me more success than the python.org version, but you can figure out what you want to use. If you are using macOS or a Linux distribution, you can install the appropriate versions of Python. For the purposes of these tutorial, we will assume you are using Windows 10. The commands are more or less the same, so no matter what OS you have, you should be able to run it successfully. After you have installed Python, you need to install [discord.py](https://pypi.org/project/discord.py/). There are two versions of discord.py available, one with only text based support and one with both text and voice based support. Since this is a very basic bot, you need not worry about installing the voice edition. Open up Command Prompt and type in the following command: 
`pip3 install discord.py`. It may show you some warnings about an outdated pip install, but that is not really an issue in this case. Running that command gives you support for Discord-specific commands that are present in the code. After you've installed the dependencies needed, you should be good to go! Follow these steps:

 1. Download the latest bot.py from Releases. Using your favorite code editor (Visual Studio Code, Notepad ++, Notepad?), make sure to customize the bot.py commands and responses to your heart's content, as the version from the Releases page is a template you need to edit.
 2. On the very last line of the bot.py file, you need to edit the "TOKEN" field with your Discord bot token. You can find the instructions on how to do so here.


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE0MDU4NTM4NzJdfQ==
-->