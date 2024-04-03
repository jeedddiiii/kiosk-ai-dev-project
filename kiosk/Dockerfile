# Use the official Python 3.8.8 image as the base image
FROM python:3.8.8-slim

# Set the working directory in the container
WORKDIR /app

# Update the package lists and install the necessary libraries
RUN apt-get update && apt-get install -y libgl1-mesa-glx libglib2.0-0

# Copy the requirements file
COPY requirements.txt .

# Install the Python dependencies
RUN for i in 1 2 3 4 5; do pip install --no-cache-dir -r requirements.txt && break || sleep 15; done
# Copy the entire project directory
COPY . .

# Expose the port that the Flask app will run on
EXPOSE 5000

# Run the Flask application
CMD ["python", "app.py"]