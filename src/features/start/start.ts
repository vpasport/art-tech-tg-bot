import type { Telegraf } from 'telegraf';
import type { BotContext } from '@shared/interfaces/bot-context.types';
import type { Chat } from 'telegraf/typings/core/types/typegram';

import { startMessage } from '@shared/constants/messages';

export const addStart = (bot: Telegraf<BotContext>) => {
	bot.start(async (ctx) => {
		try {
			const messages = startMessage(ctx.chat as Chat.PrivateChat);

			await ctx.replyWithMediaGroup(messages.media);
			await ctx.reply(messages.replay.message, {
				reply_markup: {
					inline_keyboard: messages.replay.keyboard,
				},
			});
		} catch (err) {
			console.error(err);
		}
	});
};
