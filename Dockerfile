FROM node:20-alpine as build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /bot
COPY . /bot

RUN corepack enable

RUN pnpm i --frozen-lockfile
RUN pnpm build

CMD ["pnpm", "start"]