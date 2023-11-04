# Use an official Node.js runtime as the base image
FROM  node:20.9.0-alpine3.18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json  ./

# Install project dependencies
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Set the NODE enviroment to production
ENV NODE_ENV=production

# Expose the port on which your application runs (assuming your app runs on port 3000)
EXPOSE 3000

# Specify the command to run your application
CMD ["node", "server.js"]
