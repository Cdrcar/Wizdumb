const { Schema, model } = require("mongoose");

const resourceSchema = new Schema({
  name: {
    type: String,
    required: true,
  
  },
  courseName: {
    type: String,
    required: true,
  },
  video: {
    type: String,
  },
  text: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Resource = model("Resource", resourceSchema);

module.exports = Resource;
