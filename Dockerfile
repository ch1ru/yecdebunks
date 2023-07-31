FROM node:latest
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install --legact-peer-deps
RUN npm install react-scripts@5.0.1 -g
COPY . ./
CMD ["npm", "start"]