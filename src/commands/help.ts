import ParsedCommandContext from '../types/commands/ParsedCommandContext';
import Command from '../types/commands/Command';
import { Client } from 'discord.js-selfbot-v13';

export const help: Command = {
    name: 'help',
    aliases: ['h', 'cmds'],
    callback: (client: Client, ctx: ParsedCommandContext) => {
        return `Commands:
        guilds - get all joined guilds
        channels - get all channels for the currently selected guild
        usechannel/usech - "enter" a channel, works for dms too
        leavechannel/leavech - the opposite of usech
        dms - get all open dms

        clear - clears the terminal
        bye - closes the client`;
    },
};
