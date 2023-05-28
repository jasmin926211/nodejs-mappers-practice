import mongoose from 'mongoose';

const entities = new mongoose.Schema(
  {
    entityName: String,
    entityValue: String,
    entityOwner: String,
    entityUniqueId: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model('Entities', entities);
