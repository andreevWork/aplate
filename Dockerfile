FROM node:7.5

RUN groupadd -r api_group && useradd -r -g api_group api_user

RUN mkdir /api && chown -R api_user:api_group /api

WORKDIR /api

COPY api /api

VOLUME /api/models

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
