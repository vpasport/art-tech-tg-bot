import type { Context } from 'telegraf';

export interface BotSession {
	test?: string;
}

export interface BotContext extends Context {
	session: BotSession;
}
