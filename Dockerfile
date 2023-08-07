FROM node:latest
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install --legacy-peer-deps
RUN npm install react-scripts@5.0.1 -g
COPY . ./
CMD ["npm", "start"]