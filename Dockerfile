#The base image for building a new image in our case is the node.
#This command must be on top of the Dockerfile.
FROM node:8.12.0-alpine

# It defines an environment variable.
ENV NPM_CONFIG_LOG LEVEL warn


#execute a command mdir to create a /usr/src/app during the build process of the docker image.
RUN mkdir -p /usr/src/app

#This is directive for ENTRYPOINT command to be executed.
WORKDIR /usr/src/app


#Copies all files from the host machine to the new docker image.
COPY package.json /usr/src/app

RUN npm install --only=production

COPY . ./
#Exposes a  port 3000 on which the container will run.
EXPOSE 3000

ENV NODE_ENV production

#Defines the default command that will be executed when the container is running.
ENTRYPOINT ["npm", "start"]
