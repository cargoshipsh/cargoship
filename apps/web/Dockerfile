FROM node:18.16-alpine
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY . .
# Copy .env file because Docker don't follow symlinks
COPY .env /app/apps/web/

RUN pnpm install

# Build the project
RUN pnpm dlx prisma generate
RUN pnpm turbo run build --filter=web...

CMD pnpm dlx prisma migrate deploy && pnpm db:seed && pnpm start --filter=web