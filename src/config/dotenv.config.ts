import * as dotenv from 'dotenv';

dotenv.config();

export class CONFIG {
    private _BOT_TOKEN() {
        if (process.env.BOT_TOKEN) {
            return process.env.BOT_TOKEN;
        }
        throw new Error('Bot Token not found!');
    }

    BOT_TOKEN = this._BOT_TOKEN();

    private _ADMIN_ID() {
        if (process.env.ADMIN_ID) {
            return process.env.ADMIN_ID;
        }
        throw new Error('Admin Id not found!');
    }

    ADMIN_ID = this._ADMIN_ID();

    private _CHANNEL_ID() {
        if (process.env.CHANNEL_ID) {
            return process.env.CHANNEL_ID;
        }
        throw new Error('Channel Id Not Found!');
    }

    CHANNEL_ID = this._CHANNEL_ID();
}
