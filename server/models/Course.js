const { Schema, model } = require('mongoose');

const courseSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        users:  [
            {
                type: Schema.Types.ObjectId,
                ref: 'Users'
            }
        ],
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comments'
            }
        ],
        resources: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Resources'
            }
        ],
    }
);

const Course = model('Course', courseSchema);

module.exports = Course;