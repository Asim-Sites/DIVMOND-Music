FROM node:latest

RUN mkdir -p /usr/src/divmond_music
WORKDIR /usr/src/divmond_music

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /usr/src/divmond_music/

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# helps provide faster, reliable, reproducible builds for production environments. You can read more about this here.
# https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable

# Bundle app source
COPY . /usr/src/divmond_music

EXPOSE 8080

# ===
# Launch the wait tool and then your application
# Source: https://dev.to/hugodias/wait-for-mongodb-to-start-on-docker-3h8b
# ===

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
CMD /wait && npm start

# CMD [ "npm", "start" ]

