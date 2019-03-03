FROM node:latest

# set working directory
RUN mkdir /trips/src/app
WORKDIR /trips/src

# add `/trips/src/node_modules/.bin` to $PATH
ENV PATH /trips/src/node_modules/.bin:$PATH

# install and cache app dependencies
ADD package.json /trips/src/package.json
RUN npm install

# start app
CMD ["npm", "start"]