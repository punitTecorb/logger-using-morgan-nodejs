## Logger in nodejs

## Introduction
  logger using nodejs with TypeScript. we are using morgan library for setup logs on server.

  Morgan is an HTTP request level Middleware. It is a great tool that logs the requests along with some other information depending upon its configuration and the preset used. It proves to be very helpful while debugging and also if you want to create Log files.

  You can check code inside src/server.ts file.
  you can check logs inside src/log/access.log file.

## Setup Steps:
### Required details for setup this project
   1. Add your mongodb database string in env file.
   2. Add your jwt token in env file.
   
### Install project dependency
`npm install`
### local server
`npm run start:dev`
### prod build
`npm run build`
### prod build run
`node dist/index.js`
