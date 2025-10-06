FROM node:20

RUN apt-get update && \
    apt-get install -y python3 openjdk-17-jdk g++ && \
    npm install -g nodemon

WORKDIR /app

COPY . .

CMD ["npm", "start"]
