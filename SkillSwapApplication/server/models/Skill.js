const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema(
  {
    skill: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model('Skill', skillSchema);

module.exports = Skill;