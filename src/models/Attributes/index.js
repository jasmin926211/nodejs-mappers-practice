import mongoose from 'mongoose';

import ThirdPartyMappingDetails from './ThirdPartyMappingDetails';

const attributes = new mongoose.Schema(
  {
    attributeName: String,
    attributeType: String,
    thirdPartyMappingDetails: [ThirdPartyMappingDetails],
  },
  { timestamps: true },
);

module.exports = mongoose.model('Attributes', attributes);
