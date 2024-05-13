import express from 'express';

import * as controller from './controller';

const router = express.Router();

router.get('/', controller.root);
router.get('/user', controller.getUsers);
router.post('/user', controller.newUser);

export default router;
