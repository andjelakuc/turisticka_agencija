#FROM node:14 AS Production

#ENV NODE_ENV=production

#WORKDIR /usr/src/frontend

#COPY package.json .
#COPY package-lock.json .

#RUN npm install

#COPY . . 

#RUN npm run build

#CMD ["sh", "-c", "npm run start:production"]

FROM node:17
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm cache clean
RUN npm install
COPY . /usr/src/app
EXPOSE 4200
CMD [ "npm", "start" ]

