const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: false,
      trim: true
    },
    lastName: {
      type: String,
      required: false,
      trim: true
    },
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
          return true; // Add your password validation logic here
        },
        message: `Password does not meet the requirements, please try again`,
      },
    },
    aboutMe: {
      type: String,
     
      
    },
    location: {
      type: String,
     
      
    },
    topSkills: {
      type: String,
    },
  ],
  commentReply: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  likedComment: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tag",
      }
    ],
    profilePhoto: {
      type: String,
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
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
