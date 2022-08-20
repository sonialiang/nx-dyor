FROM node:lts-alpine
WORKDIR /app
COPY ./dist/packages/admin-api .
COPY ./prisma .
COPY .env .env
ENV PORT=3333
EXPOSE ${PORT}
RUN npm install --production
RUN npm install --save-dev prisma
RUN npx prisma generate
CMD node ./main.js