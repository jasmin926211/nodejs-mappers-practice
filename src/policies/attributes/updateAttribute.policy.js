import Joi from 'joi';
import {
  combineValidationMessages,
  generateInvalidDataTypeMessage,
} from 'utilities/validations';
import { MANDATORY_STRING_FIELD_RULE } from 'constants/validations';

const updateAttributePolicy = {
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
    attributeName: Joi.string().messages(
      generateInvalidDataTypeMessage('string.base', 'string', 'attribute name'),
    ),
    attributeType: Joi.string().messages(
      generateInvalidDataTypeMessage('string.base', 'string', 'attribute type'),
    ),
    thirdPartyMappingDetails: Joi.array().items(
      Joi.object().keys({
        thirdPartyName: Joi.string()
          .valid('facebook', 'instagram', 'youtube')
          .messages({
            'any.only':
              'Only facebook, instagram, and youtube are allowed third party names',
          }),
        thirdPartyAttributeName: Joi.string().messages(
          generateInvalidDataTypeMessage(
            'string.base',
            'string',
            'third party attribute name',
          ),
        ),
      }),
    ),
  }),
};

export default updateAttributePolicy;
