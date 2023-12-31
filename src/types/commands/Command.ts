interface Command {
    name: String;
    aliases: String[];
    callback: Function;
}

export default Command;
