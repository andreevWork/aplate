FROM node:7.5

RUN groupadd -r api_group && useradd -r -g api_group api_user

RUN mkdir -p /src/api && chown -R api_user:api_group /src/api

WORKDIR /src/api

COPY package.json /src/api

COPY api /src/api/api

VOLUME /src/api/api/models /src/api/api/dist /src/api/api/middlewares

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
