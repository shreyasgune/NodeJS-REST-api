#Dockerfile
FROM node:boron

MAINTAINER Shreyas Gune

USER root 

RUN \
  apt-get update && \
  apt-get -y upgrade && \
  apt-get install -y build-essential && \
  apt-get install -y software-properties-common && \
  apt-get install -y byobu curl git htop man unzip vim wget && \
  rm -rf /var/lib/apt/lists/*
  
WORKDIR /opt

RUN git clone https://github.com/shreyasgune/NodeJS-REST-api.git
WORKDIR /opt/NodeJS-REST-api
EXPOSE 3100

RUN npm install
CMD [ "npm", "start" ]
