# Use the official Jekyll image from Docker Hub
FROM jekyll/jekyll:4.2.0

# Set the working directory
WORKDIR /srv/jekyll

# Copy the Gemfile and Gemfile.lock
COPY Gemfile Gemfile.lock ./

# Install dependencies
RUN bundle install

# Copy the rest of the application
COPY . .

# Expose port 4000 to access the site
EXPOSE 4000

# Command to build and serve the site
CMD ["jekyll", "serve", "--host", "0.0.0.0"]