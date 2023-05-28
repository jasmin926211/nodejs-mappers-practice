import Joi from 'joi';
import {
  combineValidationMessages,
  generateInvalidDataTypeMessage,
} from 'utilities/validations';
import { MANDATORY_STRING_FIELD_RULE } from 'constants/validations';

const saveAttributePolicy = {
  body: Joi.object().keys({
    attributeName: Joi.string()
      .required()
      .messages({
        ...combineValidationMessages(
          MANDATORY_STRING_FIELD_RULE,
          'Please provide attribute name',
        ),
        ...generateInvalidDataTypeMessage(
          'string.base',
          'string',
          'attribute name',
        ),
      }),
    attributeType: Joi.string()
      .required()
      .messages({
        ...combineValidationMessages(
          MANDATORY_STRING_FIELD_RULE,
          'Please provide attribute type',
        ),
        ...generateInvalidDataTypeMessage(
          'string.base',
          'string',
          'attribute type',
        ),
      }),
    thirdPartyMappingDetails: Joi.array().items(
      Joi.object().keys({
        thirdPartyName: Joi.string()
          .valid('facebook', 'instagram', 'youtube')
          .required()
          .messages({
            ...combineValidationMessages(
              MANDATORY_STRING_FIELD_RULE,
              'Please provide third party name',
            ),
            'any.only':
              'Only facebook, instagram, and youtube are allowed third party names',
          }),
        thirdPartyAttributeName: Joi.string()
          .required()
          .messages({
            ...combineValidationMessages(
              MANDATORY_STRING_FIELD_RULE,
              'Please provide third party attribute name',
            ),
            ...generateInvalidDataTypeMessage(
              'string.base',
              'string',
              'third party attribute name',
            ),
          }),
      }),
    ),
  }),
};

export default saveAttributePolicy;
