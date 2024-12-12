FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Step 7: Remove development dependencies to reduce image size
RUN npm prune --production

# Step 8: Use a smaller image for runtime
FROM node:18-alpine AS runner

# Step 9: Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Step 10: Set working directory and copy necessary files
WORKDIR /app
COPY --from=builder /app ./

# Step 11: Expose the application port
EXPOSE 3000

# Step 12: Apply Prisma migrations and start the application
CMD ["npm run start"]
