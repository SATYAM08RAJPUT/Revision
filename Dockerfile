# Step 1: Base Image
FROM node:18-alpine AS build

# Step 2: Work Directory Set Karein
WORKDIR /app

# Step 3: Dependencies Install Karein
COPY package.json package-lock.json ./
RUN npm install

# Step 4: Source Code Copy Karein
COPY . .

# Step 5: React App Build Karein
RUN npm run build

# Step 6: Nginx Server Use Karna (Production ke liye)
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Step 7: Port Expose Karein
EXPOSE 80

# Step 8: Nginx Start Karein
CMD ["nginx", "-g", "daemon off;"]
