import * as express from 'express';
import * as passport from 'passport';

import barRouter from './bars'



const router = express.Router();


 
router.use('/bars', barRouter);




export default router;