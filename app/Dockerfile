# Stage 1: Build
FROM node:20-alpine AS builder

# Çalışma dizini oluştur
WORKDIR /app

# Paketleri kopyala ve yükle
COPY package.json package-lock.json* ./
RUN npm install

# Tüm proje dosyalarını kopyala
COPY . .

# Production build
RUN npm run build

# Stage 2: Production image
FROM node:20-alpine AS runner

WORKDIR /app

# Production dependency’leri yükle
COPY package.json package-lock.json* ./
RUN npm install --production

# Build’ı kopyala
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Environment variable default (opsiyonel)
ENV PORT=3000

# Portu expose et
EXPOSE 3000

# Start komutu
CMD ["npm", "start"]
