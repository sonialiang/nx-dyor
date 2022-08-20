FROM node:lts-alpine
WORKDIR /app
COPY ./dist/packages/admin-ui .
COPY .env .env
ENV PORT=4200
EXPOSE ${PORT}
RUN npm install --production
RUN npm install --save-dev @nrwl/next
CMD npm start