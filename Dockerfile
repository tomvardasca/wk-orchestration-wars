FROM node:8-slim

COPY index.js .

EXPOSE 8000

CMD node index.js
