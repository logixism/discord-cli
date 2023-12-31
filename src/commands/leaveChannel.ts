import ParsedCommandContext from '../types/commands/ParsedCommandContext';
import Command from '../types/commands/Command';
import ExtendedClient from '../types/ExtendedClient';

export const leavechannel: Command = {
    name: 'leavechannel',
    aliases: ['leavech', 'lvch'],
    callback: async (client: ExtendedClient, ctx: ParsedCommandContext) => {
        const currentChannel = client.variables.currentChannel;

        if (!currentChannel) {
            return 'There is no channel to leave, silly.';
        }

        client.variables.currentChannel = null;

        if (currentChannel.type === 'DM') {
            return `Left the DM channel with [${currentChannel.recipient.username}<${currentChannel.recipient.id}>]`;
        }

        return `Left the [${currentChannel.name}<${currentChannel.type.replace(
            'GUILD_',
            ''
        )}>] channel`;
    },
};
