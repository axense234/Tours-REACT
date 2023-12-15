FROM node:latest
WORKDIR /usr/src/tours-react
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]