import * as dotenv from 'dotenv';
dotenv.config();
export class CONFIG {
    constructor() {
        this.BOT_TOKEN = this._BOT_TOKEN();
        this.ADMIN_ID = this._ADMIN_ID();
        this.CHANNEL_ID = this._CHANNEL_ID();
    }
    _BOT_TOKEN() {
        if (process.env.BOT_TOKEN) {
            return process.env.BOT_TOKEN;
        }
        throw new Error('Bot Token not found!');
    }
    _ADMIN_ID() {
        if (process.env.ADMIN_ID) {
            return process.env.ADMIN_ID;
        }
        throw new Error('Admin Id not found!');
    }
    _CHANNEL_ID() {
        if (process.env.CHANNEL_ID) {
            return process.env.CHANNEL_ID;
        }
        throw new Error('Channel Id Not Found!');
    }
}
//# sourceMappingURL=dotenv.config.js.map