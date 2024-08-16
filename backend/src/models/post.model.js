import mongoose,{Schema} from "mongoose";

const postSchema = new Schema({},{timestamps: true});

export const postModel = mongoose.model('Post', postSchema);