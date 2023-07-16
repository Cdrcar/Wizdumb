const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        comment: {
            type: String,
            required: true
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