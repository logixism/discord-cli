import ParsedCommandContext from '../types/commands/ParsedCommandContext';
import Command from '../types/commands/Command';
import { AnyChannel, Client, Collection } from 'discord.js-selfbot-v13';

export const dms: Command = {
    name: 'dms',
    aliases: ['pms'],
    callback: (client: Client, ctx: ParsedCommandContext) => {
        const dmChannels: Collection<string, AnyChannel> =
            client.channels.cache.filter((ch) => ch.type == 'DM');

        return dmChannels
            .map(
                (channel: any) =>
                    `@${channel.recipient.username}, channel id: ${channel.id}`
            )
            .join('\n');
    },
};
