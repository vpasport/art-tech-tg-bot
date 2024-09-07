declare namespace NodeJS {
	interface ProcessEnv {
		TG_TOKEN: string;
		POSTGRES_USER: string;
		POSTGRES_PASSWORD: string;
		POSTGRES_DB: string;
	}
}
