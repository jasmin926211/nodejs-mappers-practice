import express from 'express';
import attributes from './attributes';
import entities from './entities';

const router = express.Router();

router.use('/', attributes);
router.use('/entities', entities);

module.exports = router;
