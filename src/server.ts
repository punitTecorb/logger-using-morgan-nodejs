import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';
import apiRouter from './routes/customer';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
const rfs = require('rotating-file-stream'); // version 2.x
// Constants
const app = express();

// Server logger start
// create a rotating write stream
var accessLogStream = rfs.createStream('access.log', {
    interval: '1d', // rotate daily
    path: path.join(__dirname, 'log')
});
   
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));
// Server logger end

/***********************************************************************************
 *                                  Middlewares  
 **********************************************************************************/

// Common middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Security (helmet recommended in express docs)
if (process.env.NODE_ENV === 'production') {
    
}
// Add api router
app.use('/api/v1', apiRouter);

// Export here and start in a diff file (for testing).
export default app;