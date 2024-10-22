import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
    caption: { type: String, default: '' },
    media: { 
        type: String, 
        required: true 
    },
    mediaType: { 
        type: String, 
        enum: ['image', 'video'], // Restrict to 'image' or 'video'
        required: true 
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    views: {
        type: Number,
        default: 0,
    },
    viewers: [String],
}, { timestamps: true });

export const Post = mongoose.model('Post', postSchema);