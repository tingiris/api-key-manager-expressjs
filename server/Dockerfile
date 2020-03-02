# specify the node base image with your desired version node:<version>
FROM node:latest

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

# USER node

RUN npm install --silent

COPY --chown=node:node . .

# replace this with application's default port
EXPOSE 3838

# RUN chmod +x /home/node/app/docker-entrypoint.sh
# ENTRYPOINT [ "docker-entrypoint.sh" ]

RUN chmod +x /home/node/app/wait-for-it.sh
# ENTRYPOINT [ "/bin/bash", "-c" ]
# CMD ["./wait-for-it.sh" , "[ENTER YOUR ENDPOINT HERE]" , "--strict" , "--timeout=300" , "--" , "YOUR REAL START COMMAND"]