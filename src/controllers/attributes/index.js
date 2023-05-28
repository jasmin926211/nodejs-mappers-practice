import express from 'express';
import { validateRequest } from '@utils-manager-commons';

import saveAttributePolicy from 'policies/attributes/saveAttribute.policy';
import updateAttributePolicy from 'policies/attributes/updateAttribute.policy';

import saveAttribute from './saveAttribute';
import getAttributes from './getAttributes';
import updateAttribute from './updateAttribute';

const router = express.Router();

router
  .route('/')
  .post(validateRequest(saveAttributePolicy), saveAttribute)
  .put(validateRequest(updateAttributePolicy), updateAttribute);
router.route('/meta-data').post(getAttributes);

export default router;
