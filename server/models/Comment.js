const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        title: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        like: {
            type: Number,
            required: false
        },
        resource: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Resource'
            }
        ],
        course: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Course'
            }
        ],
    }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;