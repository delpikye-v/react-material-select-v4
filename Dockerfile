FROM node:12.18.1-alpine
ARG NPM_TOKEN

RUN mkdir -p /react-material-select-v4z
WORKDIR /react-material-select-v4z
COPY . /react-material-select-v4z

RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc

RUN npm install

RUN npm run build

# Run
CMD "npm" "publish"
