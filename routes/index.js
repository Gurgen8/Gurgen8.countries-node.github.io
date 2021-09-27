import express from "express";
import route from './route';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    status: '200'
  });
});

router.use('/route', route)

export default router;
