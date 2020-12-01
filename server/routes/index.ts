import * as express from 'express';
import * as passport from 'passport';

import restaurantRouter from './api/restaurants'
import barRouter from './api/bars'
import attractionRouter from './api/attractions'

const router = express.Router();
 
router.use('/restaurants', restaurantRouter);
router.use('/bars', barRouter);
router.use('/attractions', attractionRouter);


export default router;