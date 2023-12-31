import { Client, ClientOptions } from 'discord.js-selfbot-v13';

class ExtendedClient extends Client {
    variables: { [key: string]: any };
    constructor(options: ClientOptions) {
        super(options);
        this.variables = {};
    }
}

export default ExtendedClient;
