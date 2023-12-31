import ParsedCommandContext from '../types/commands/ParsedCommandContext';
import Command from '../types/commands/Command';
import ExtendedClient from '../types/ExtendedClient';
import { Guild } from 'discord.js-selfbot-v13';

export const useguild: Command = {
    name: 'useguild',
    aliases: ['useserver'],
    callback: async (client: ExtendedClient, ctx: ParsedCommandContext) => {
        const guildId = ctx.arguments[0];

        if (typeof guildId !== 'string')
            return 'No guild ID specified as an argument';

        const foundGuild: Guild = await client.guilds.fetch(guildId);

        if (!foundGuild) return 'Guild with that ID was not found';

        client.variables.currentGuild = foundGuild;

        return `Now using guild ${foundGuild.name}`;
    },
};
