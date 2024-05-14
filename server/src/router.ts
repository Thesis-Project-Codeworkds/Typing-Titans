import express from 'express';

import * as controller from './controller';

const router = express.Router();

router.get('/', controller.root);
router.get('/user', controller.getUsers);
router.get('/user/details', controller.getUsersWithDetails);
router.post('/user', controller.newUser);
router.get('/shortcuts', controller.getShortcuts);
router.post('/api/webhooks', controller.svixHook);

export default router;
