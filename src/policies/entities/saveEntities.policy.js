import Joi from 'joi';
import {
  combineValidationMessages,
  generateInvalidDataTypeMessage,
} from 'utilities/validations';
import { MANDATORY_STRING_FIELD_RULE } from 'constants/validations';

const saveEntityPolicy = {
  body: Joi.object().keys({
    entityName: Joi.string()
      .required()
      .messages({
        ...combineValidationMessages(
          MANDATORY_STRING_FIELD_RULE,
          'Please provide entity name',
        ),
        ...generateInvalidDataTypeMessage(
          'string.base',
          'string',
          'entity name',
        ),
      }),
    entityValue: Joi.string()
      .required()
      .messages({
        ...combineValidationMessages(
          MANDATORY_STRING_FIELD_RULE,
          'Please provide entity value',
        ),
        ...generateInvalidDataTypeMessage(
          'string.base',
          'string',
          'entity value',
        ),
      }),
    entityOwner: Joi.string()
      .required()
      .messages({
        ...combineValidationMessages(
          MANDATORY_STRING_FIELD_RULE,
          'Please provide entity owner',
        ),
        ...generateInvalidDataTypeMessage(
          'string.base',
          'string',
          'entity owner',
        ),
      }),
  }),
};

export default saveEntityPolicy;
