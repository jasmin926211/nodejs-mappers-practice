import { Schema } from 'mongoose';

const ThirdPartyMappingDetails = new Schema({
  thirdPartyName: {
    type: String,
  },
  thirdPartyAttributeName: {
    type: String,
  },
});

module.exports = ThirdPartyMappingDetails;
