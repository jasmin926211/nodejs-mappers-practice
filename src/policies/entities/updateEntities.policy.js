import Joi from 'joi';
import {
  combineValidationMessages,
  generateInvalidDataTypeMessage,
} from 'utilities/validations';
import { MANDATORY_STRING_FIELD_RULE } from 'constants/validations';

const updateEntityPolicy = {
  body: Joi.object().keys({
    _id: Joi.string().messages({
      ...combineValidationMessages(
        MANDATORY_STRING_FIELD_RULE,
        'Please provide _id of the attribute',
      ),
      ...generateInvalidDataTypeMessage(
        'string.base',
        'string',
        'attribute name',
      ),
    }),
    entityName: Joi.string().messages(
      generateInvalidDataTypeMessage('string.base', 'string', 'entity name'),
    ),
    entityValue: Joi.string().messages(
      generateInvalidDataTypeMessage('string.base', 'string', 'entity value'),
    ),
    entityOwner: Joi.string().messages(
      generateInvalidDataTypeMessage('string.base', 'string', 'entity owner'),
    ),
  }),
};

export default updateEntityPolicy;
