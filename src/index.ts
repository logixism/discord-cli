import readline from 'readline';
import ExtendedClient from './types/ExtendedClient';
import HandleInput from './handlers/input';
import config from '../config';

const client = new ExtendedClient({
    checkUpdate: false,
});

client.variables.currentChannel = null;
client.variables.currentChannel = null;

client.on('ready', async () => {
    if (client.user) {
        console.log(
            `Logged in as ${client.user.username}, commands may now be used`
        );

        const inputInterface = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        inputInterface.on('line', async (input) => {
            await HandleInput(input, client);
        });
    }
});

client.on('messageCreate', async (message) => {
    if (!client.variables.currentChannel) return;
    if (message.channel.id !== client.variables.currentChannel.id) return;
    console.log(
        `[${message.author.displayName}<${message.author.id}>]: ${message.content}`
    );
});

client.login(config.token);
