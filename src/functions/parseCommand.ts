import ParsedCommandContext from '../types/commands/ParsedCommandContext';

function parseCommand(input: string): ParsedCommandContext {
    const parts = input.split(' ');
    const command = parts.shift();
    const argumentsArray: string[] = [];
    const flags: string[] = [];

    parts.forEach((part) => {
        if (part.startsWith('-')) {
            const flag = part.replace(/^-+/, '');
            flags.push(flag);
        } else {
            argumentsArray.push(part);
        }
    });

    return { name: command || '', arguments: argumentsArray, flags };
}

export default parseCommand;
