import type { Telegraf } from 'telegraf';
import type { BotContext } from '@shared/interfaces/bot-context.types';

import {
	errorMessage,
	PathMessages,
	pathMessages,
} from '@shared/constants/messages';
import { Paths, Steps } from '@shared/constants/buttons';

const sendStep = async (ctx: BotContext, messages: PathMessages) => {
	await ctx.replyWithMediaGroup(messages.media);

	if (messages.audio) {
		await ctx.replyWithMediaGroup(messages.audio);
	}

	await ctx.reply(...messages.replay);
};

export const addActions = (bot: Telegraf<BotContext>) => {
	bot.action(Object.values(Paths), async (ctx) => {
		try {
			await ctx.deleteMessage(
				ctx.update.callback_query.message?.message_id
			);

			const messages = pathMessages.find(
				({ callback_data }) => callback_data === ctx.match.input
			);

			if (messages) {
				sendStep(ctx, messages);
			} else {
				await ctx.sendMessage(errorMessage.message);
			}
		} catch (err) {
			console.error(err);
		}
	});

	bot.action(
		new RegExp(`${Object.values(Steps).join('|')}$`, 'gm'),
		async (ctx) => {
			try {
				await ctx.deleteMessage(
					ctx.update.callback_query.message?.message_id
				);

				const messages = pathMessages.find(
					({ callback_data }) => callback_data === ctx.match.input
				);

				if (messages) {
					sendStep(ctx, messages);
				} else {
					await ctx.sendMessage(errorMessage.message);
				}
			} catch (err) {
				console.error(err);
			}
		}
	);
};
