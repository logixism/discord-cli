import ParsedCommandContext from '../types/commands/ParsedCommandContext';
import Command from '../types/commands/Command';
import {
    AnyChannel,
    Client,
    Collection,
    GuildChannel,
} from 'discord.js-selfbot-v13';
import ExtendedClient from '../types/ExtendedClient';

export const clear: Command = {
    name: 'clear',
    aliases: ['clr', 'cls'],
    callback: (client: ExtendedClient, ctx: ParsedCommandContext) => {
        console.clear();
        return 'Cleared';
    },
};
