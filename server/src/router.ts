import express from 'express';

import * as controller from './controller';

const router = express.Router();

router.get('/', controller.root);

export default router;
