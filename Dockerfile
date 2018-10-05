# Base image
FROM node:10.11

# Set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Add '/usr/src/app/node_modules/.bin' to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Install and cache dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @angular/cli

# Add app
COPY . /usr/src/app

# Start app
CMD ng serve --host 0.0.0.0
