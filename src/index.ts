import './pre-start'; // Must be the first import
import logger from 'jet-logger';
import server from './server';
const { createServer } = require("http");
const { Server } = require("socket.io");
import express from 'express';


// Constants
const serverStartMsg = 'Express server started on port: ',
port = (process.env.PORT || 3009);

const httpServer = createServer(server);
// Start server
httpServer.listen(port, () => {
    logger.info(serverStartMsg + port);
    console.log(serverStartMsg + port);
});
