const { Schema, model } = require("mongoose");

const tagSchema = new Schema({
  name: {
    type: String,
  },
});

const Tag = model("Tag", tagSchema);

module.exports = Tag;
