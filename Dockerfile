# swift-engage-page - Build y serve con Bun
FROM oven/bun:1 AS builder

WORKDIR /app

# Dependencias
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

# Código y build
COPY . .
RUN bun run build

# ---
# Imagen final para servir
# ---
FROM oven/bun:1-slim

WORKDIR /app

# Solo lo necesario para preview (vite está en devDependencies)
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

COPY --from=builder /app/dist ./dist

EXPOSE 8080

CMD ["bun", "run", "preview", "--", "--port", "8080", "--host", "0.0.0.0"]
