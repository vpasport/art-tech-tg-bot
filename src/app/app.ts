import { SessionStore, Telegraf, session } from 'telegraf';
// import { message } from 'telegraf/filters';
// import { Postgres } from '@telegraf/session/pg';
import type { BotContext } from '@shared/interfaces/bot-context.types';
import { addStart } from '@features/start';
import { addActions } from '@features/actions';

// const store = Postgres({
// 	database: process.env.POSTGRES_DB,
// 	user: process.env.POSTGRES_USER,
// 	password: process.env.POSTGRES_PASSWORD,
// }) as SessionStore<any>;

const bot = new Telegraf<BotContext>(process.env.TG_TOKEN);
// bot.use(session({ store }));

bot.telegram.setMyCommands([
	{
		command: 'start',
		description: 'Начать путешествие',
	},
]);

addStart(bot);
addActions(bot);

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
