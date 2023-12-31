import parseCommand from '../functions/parseCommand';
import * as cmds from '../commands';
import ExtendedClient from '../types/ExtendedClient';
import clearLastLine from '../functions/clearLastLine';

const commands = Object.values(cmds);

export default async (userInput: string, client: ExtendedClient) => {
    if (userInput === '') {
        clearLastLine();
        return;
    }

    if (userInput.startsWith('/')) {
        userInput = userInput.slice(1, userInput.length);
        const parsedCtx = parseCommand(userInput);
        const foundCommand =
            commands[
                commands.findIndex(
                    (command) =>
                        command.name === parsedCtx.name ||
                        command.aliases.includes(parsedCtx.name)
                )
            ];

        if (foundCommand) {
            const callback = foundCommand.callback(client, parsedCtx);
            Promise.resolve(callback).then((out: string) => {
                console.log(`${out}`);
            });
        }

        return;
    }
    // handle non-command inputs
    if (client.variables.currentChannel) {
        await client.variables.currentChannel.send(userInput);
    }
};
