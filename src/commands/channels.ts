import ParsedCommandContext from '../types/commands/ParsedCommandContext';
import Command from '../types/commands/Command';
import {
    AnyChannel,
    Client,
    Collection,
    GuildChannel,
} from 'discord.js-selfbot-v13';
import ExtendedClient from '../types/ExtendedClient';

export const channels: Command = {
    name: 'channels',
    aliases: ['chs'],
    callback: (client: ExtendedClient, ctx: ParsedCommandContext) => {
        if (!client.variables.currentGuild) {
            return "No guild currently selected, please select a guild to view it's channels";
        }

        const guildChannels: Collection<string, GuildChannel> =
            client.variables.currentGuild.channels.cache.filter(
                (channel: GuildChannel) =>
                    !channel.type.includes('CATEGORY') &&
                    !channel.type.includes('THREAD')
            );

        return guildChannels
            .map(
                (channel: GuildChannel) =>
                    `[${channel.name}<${channel.type.replace(
                        'GUILD_',
                        ''
                    )}>]: ${channel.id}`
            )
            .join('\n');
    },
};
