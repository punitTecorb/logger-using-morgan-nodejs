import { Router } from 'express';
const baseRouter = Router();
import mailer from './mailer';

// Setup routers
baseRouter.use('/mailer', mailer);
// Export default.
export default baseRouter;