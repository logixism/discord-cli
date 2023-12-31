import ParsedCommandContext from '../types/commands/ParsedCommandContext';
import Command from '../types/commands/Command';
import ExtendedClient from '../types/ExtendedClient';

export const usechannel: Command = {
    name: 'usechannel',
    aliases: ['usech'],
    callback: async (client: ExtendedClient, ctx: ParsedCommandContext) => {
        const channelId = ctx.arguments[0];

        if (typeof channelId !== 'string')
            return 'No channel ID specified as an argument';

        const foundChannel = await client.channels.fetch(channelId);

        if (!foundChannel) return 'Channel with that ID was not found';

        client.variables.currentChannel = foundChannel;

        if (foundChannel.type === 'DM') {
            return `Now using DM channel with @${foundChannel.recipient.username}, channel id: ${foundChannel.id}`;
        } else {
            return `Now using ${foundChannel.type} channel ${foundChannel.name}, channel id: ${foundChannel.id}`;
        }
    },
};
