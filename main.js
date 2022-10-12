const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const { joinVoiceChannel } = require('@discordjs/voice');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const { createAudioPlayer, createAudioResource , getVoiceConnection } = require('@discordjs/voice');



// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});




client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;
	const { voice } = interaction.number;
	const { channel } = interaction;

	if (commandName === 'true') {
		await interaction.reply('Messi > Ronaldo');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.user}\nYour id: ${interaction.user.id}`);
	}
});


client.login(token);