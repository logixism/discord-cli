import ParsedCommandContext from '../types/commands/ParsedCommandContext';
import Command from '../types/commands/Command';
import ExtendedClient from '../types/ExtendedClient';

export const bye: Command = {
    name: 'bye',
    aliases: ['exit', 'close'],
    callback: async (client: ExtendedClient, ctx: ParsedCommandContext) => {
        process.exit(0);
    },
};
