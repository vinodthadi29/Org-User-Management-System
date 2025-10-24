FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY backend/ .

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]