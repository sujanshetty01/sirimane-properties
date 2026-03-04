# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Build the Vite app
RUN npm run build


# Production stage
FROM nginx:alpine

# Copy the build output from the builder stage
# Vite uses 'dist' by default as the build directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 Let Nginx run on its default port internally
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
