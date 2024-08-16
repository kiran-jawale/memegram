import mongoose,{Schema} from "mongoose";

const commentSchema = new Schema({},{timestamps:true});

export const commentModel = mongoose.model('Comment', commentSchema);