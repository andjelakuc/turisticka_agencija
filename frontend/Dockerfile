FROM node:17-alpine
RUN mkdir -p /usr/src/app
#RUN apk add chromium
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
#ENV CHROME_BIN=/usr/bin/chromium-browser
COPY package.json /usr/src/app
RUN npm install
RUN npm install -g @angular/cli
COPY . /usr/src/app
EXPOSE 4200
CMD [ "npm", "start" ]
#CMD [ "npm", "test-headless" ]
#RUN npm run test