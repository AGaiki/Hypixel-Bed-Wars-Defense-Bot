import discord
import asyncio
import os
import random, requests
from discord.ext import commands
client = discord.Client()
@client.event
async def on_message(message):
    if message.author == client.user:
        return
    if message.content == '!EDIT THIS TO WHATEVER YOU WANT': #You can change !help to whatever you want. Make sure it has a prefix like "!" in front of it. If you need more commands and responses from the bot, just copy and paste this line plus the next two as many times as you want. Do NOT forget to change the command each time!
        response = "Edit this too!"
        await message.channel.send(response)

client.run("TOKEN") #Make sure that your bot token value is surrounded by quotes. In other words, replace the TOKEN value with your actual bot token value.