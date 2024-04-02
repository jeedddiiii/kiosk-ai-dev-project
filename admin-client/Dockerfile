# Switch to a smaller Alpine image for the final container
FROM node:20.10-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Vite globally
RUN npm install -g vite

# Copy the rest of the application code to the container
COPY . .

# Expose the port your app runs on
EXPOSE 5173

# Run the Vite development server
CMD ["vite", "--host", "0.0.0.0"]