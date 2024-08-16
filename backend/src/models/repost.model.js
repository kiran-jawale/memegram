import mongoose,{Schema} from "mongoose";

const repostSchema = new Schema({},{timestamps:true});

export const repostModel = mongoose.model('Repost', repostSchema);