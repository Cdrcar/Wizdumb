const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, `Username required`],
    unique: true,
    trim: true,
    min: 4,
    max: 20,
    validate: {
      validator: function (v) {
        return /[a-zA-Z0-9_.-]*/.test(v);
      },
      message: `Username does not meet the requirements, please try again`,
    },
  },
  email: {
    type: String,
    required: [true, `Email required`],
    unique: true,
    trim: true,
    validate: {
      validator: function (v) {
        return /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/i.test(v);
      },
      message: `Email invalid, please try again`,
    },
  },
  password: {
    type: String,
    required: [true, `Password required`],
    trim: true,
    min: 4,
    validate: {
      validator: function (v) {
        return;
      },
      message: `Password does not meet the requirements, please try again`,
    },
  },
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  resources: [
    {
      type: Schema.Types.ObjectId,
      ref: "Resource",
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],
});

const User = model("User", userSchema);

module.exports = User;
