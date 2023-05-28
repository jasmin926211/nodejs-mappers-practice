import express from 'express';
import { validateRequest } from '@utils-manager-commons';

import saveEntityPolicy from 'policies/entities/saveEntities.policy';
import updateEntityPolicy from 'policies/entities/updateEntities.policy';

import saveEntity from './saveEntity';
import getEntityById from './getEntityById';
import updateEntity from './updateEntity';

const router = express.Router();

router
  .route('/')
  .get(getEntityById)
  .post(validateRequest(saveEntityPolicy), saveEntity)
  .put(validateRequest(updateEntityPolicy), updateEntity);

export default router;
