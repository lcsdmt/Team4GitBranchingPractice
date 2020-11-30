import * as express from 'express';
import * as passport from 'passport';

import attractionRouter from '../../../server';



const router = express.Router();


 
router.use('/attractions', attractionRouter);




export default router;

