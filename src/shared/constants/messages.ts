import { resolve } from 'path';
import { Context, Input } from 'telegraf';
import {
	Chat,
	InlineKeyboardButton,
} from 'telegraf/typings/core/types/typegram';
import { MediaGroup } from 'telegraf/typings/telegram-types';
import { Paths, Steps } from './buttons';
import { BotContext } from '@shared/interfaces/bot-context.types';

interface StartMessage {
	media: MediaGroup;
	replay: {
		message: string;
		keyboard: InlineKeyboardButton[][];
	};
}

export const startMessage: (chat: Chat.PrivateChat) => StartMessage = (
	chat
) => {
	const name = chat?.first_name || chat?.username;

	return {
		media: [
			{
				media: Input.fromLocalFile(
					resolve(
						__dirname,
						'../',
						'./data/images',
						'start-photo-1.jpg'
					)
				),
				type: 'photo',
				caption: `123 <b>Привет, ${
					name ? `${name}, ` : ''
				}вы попали на ...</b> \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
				parse_mode: 'HTML',
			},
			{
				media: Input.fromLocalFile(
					resolve(
						__dirname,
						'../',
						'./data/images',
						'path-1-step-1.jpg'
					)
				),
				type: 'photo',
			},
		],
		replay: {
			message: 'Выберите маршрут',
			keyboard: [
				[{ text: 'Маршрут 1', callback_data: Paths.Path1 }],
				[{ text: 'Маршрут 2', callback_data: Paths.Path2 }],
			],
		},
	};
};

export interface PathMessages {
	callback_data: string;
	media: MediaGroup;
	audio?: MediaGroup;
	replay: Parameters<Context['reply']>;
}

export const pathMessages: PathMessages[] = [
	{
		callback_data: Paths.Path1,
		media: [
			{
				media: Input.fromLocalFile(
					resolve(
						__dirname,
						'../',
						'./data/images',
						'path-1-step-1.jpg'
					)
				),
				type: 'photo',
				caption:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			},
		],
		audio: [
			{
				media: Input.fromLocalFile(
					resolve(
						__dirname,
						'../',
						'./data/audio',
						'XXXTentacion - SAD!.mp3'
					)
				),
				type: 'audio',
				caption: 'Также вы можете прослушать наш аудио гид',
			},
		],
		replay: [
			'Идем дальше?',
			{
				reply_markup: {
					inline_keyboard: [
						[
							{
								text: 'Да, конечно',
								callback_data: Paths.Path1 + '_' + Steps.Step1,
							},
						],
					],
				},
			},
		],
	},
	{
		callback_data: Paths.Path2,
		media: [
			{
				media: Input.fromLocalFile(
					resolve(
						__dirname,
						'../',
						'./data/images',
						'path-2-step-1.jpg'
					)
				),
				type: 'photo',
				caption:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			},
		],
		audio: [
			{
				media: Input.fromLocalFile(
					resolve(
						__dirname,
						'../',
						'./data/audio',
						'XXXTentacion - SAD!.mp3'
					)
				),
				type: 'audio',
				caption: 'Также вы можете прослушать наш аудио гид',
			},
		],
		replay: [
			'<b>Поздавляем, вы прошли весь маршрут!</b>\n\nМожете следить за нами в нашем <a href="https://t.me/arttech_education">тг канале</a>',
			{ parse_mode: 'HTML' },
		],
	},
	{
		callback_data: Paths.Path1 + '_' + Steps.Step1,
		media: [
			{
				media: Input.fromLocalFile(
					resolve(
						__dirname,
						'../',
						'./data/images',
						'path-1-step-2.jpg'
					)
				),
				type: 'photo',
				caption:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			},
		],
		audio: [
			{
				media: Input.fromLocalFile(
					resolve(
						__dirname,
						'../',
						'./data/audio',
						'XXXTentacion - SAD!.mp3'
					)
				),
				type: 'audio',
				caption: 'Также вы можете прослушать наш аудио гид',
			},
		],
		replay: [
			'<b>Поздавляем, вы прошли весь маршрут!</b>\n\nМожете следить за нами в нашем <a href="https://t.me/arttech_education">тг канале</a>',
			{ parse_mode: 'HTML' },
		],
	},
];

export const errorMessage = {
	message:
		'Простите, что-то пошло не так, попробуйте начать заново, используя команду /start',
};
