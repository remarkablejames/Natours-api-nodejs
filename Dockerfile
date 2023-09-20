FROM node:18.17-alpine

# Create app directory

WORKDIR /app

# copy package.json and package-lock.json

COPY package*.json ./

# Install dependencies

RUN npm install

# Copy app source code

COPY . .

# Expose port 8080

EXPOSE 8080

# Run app

CMD ["npx","nodemon", "app.js"]