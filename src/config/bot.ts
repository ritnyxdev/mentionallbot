import { CONFIG } from './dotenv.config.js';
import { Telegraf } from 'telegraf';

const config = new CONFIG();
const users = [
    '1080121615',
    '1357846666',
    '1622168001',
    '828953718',
    '578210332',
    '739203262',
    '784562004',
    '858524367',
    '873939238',
    '1030692450',
    '1251901085',
    '1355652748',
    '1902346043',
    '2066399377',
    '5424873340',
    '5675363375',
    '5948332712',
];
export const bot = new Telegraf(config.BOT_TOKEN);
bot.hears('@all', async (ctx) => {
    let text = '';
    users.forEach((id) => {
        text += `<a href='tg://user?id=${id}'>🗣</a>`;
    });
    const replyMsgId = ctx.update.message.reply_to_message?.message_id;
    console.log(replyMsgId);
    if (replyMsgId) {
        console.log("IF");
        await ctx.telegram.sendMessage(ctx.chat.id, text, {
            reply_to_message_id: replyMsgId,
            parse_mode: 'HTML',
        });
    } else {
        console.log("ELSE");
        await ctx.telegram.sendMessage(ctx.chat.id, text, {
            parse_mode: 'HTML',
        });
    }
});
