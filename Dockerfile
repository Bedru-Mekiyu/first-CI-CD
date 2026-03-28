# Stage 1: Build dependencies
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Stage 2: Production image
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY --from=builder /app .

EXPOSE 3000

CMD ["npm", "start"]
