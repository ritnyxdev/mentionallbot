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
}
