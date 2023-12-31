import ParsedCommandContext from '../types/commands/ParsedCommandContext';
import Command from '../types/commands/Command';
import { AnyChannel, Client, Collection, Guild } from 'discord.js-selfbot-v13';

export const guilds: Command = {
    name: 'guilds',
    aliases: ['servers'],
    callback: (client: Client, ctx: ParsedCommandContext) => {
        const guilds: Collection<string, Guild> = client.guilds.cache;

        return guilds
            .map((guild: Guild) => `${guild.name}, guild id: ${guild.id}`)
            .join('\n');
    },
};
