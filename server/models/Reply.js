const { Schema, model } = require("mongoose");

const replySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  parentComment: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  },
  comment: {
    type: String,
    required: true,
  }
});

const Reply = model("Reply", replySchema);

module.exports = Comment;
