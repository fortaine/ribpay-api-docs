# Use a Node base image
FROM node:16-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the Docusaurus site
RUN yarn build

# Use serve to serve the build directory on port 3000
FROM node:16-alpine AS serve

# Install serve
RUN yarn global add serve

# Copy build artifacts from the 'build' stage
COPY --from=build /app/build /app

# Serve the static site
CMD ["serve", "-s", "/app", "-p", "3000"]

# Expose port 3000
EXPOSE 3000
