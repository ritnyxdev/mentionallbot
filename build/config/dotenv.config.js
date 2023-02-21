import * as dotenv from 'dotenv';
dotenv.config();
export class CONFIG {
    constructor() {
        this.BOT_TOKEN = this._BOT_TOKEN();
    }
    _BOT_TOKEN() {
        if (process.env.BOT_TOKEN) {
            return process.env.BOT_TOKEN;
        }
        throw new Error('Bot Token not found!');
    }
}
//# sourceMappingURL=dotenv.config.js.map
