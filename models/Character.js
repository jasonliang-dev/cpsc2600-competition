const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  appearances: Number
});

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;
