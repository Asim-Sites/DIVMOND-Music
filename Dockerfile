FROM node:8

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# helps provide faster, reliable, reproducible builds for production environments. You can read more about this here.
# https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]

