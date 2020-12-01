import * as express from 'express';
import * as passport from 'passport';

import restaurantRouter from '../..';



const router = express.Router();


 
router.use('/restaurants', restaurantRouter);




export default router;