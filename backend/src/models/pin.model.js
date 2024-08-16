import mongoose,{Schema} from "mongoose";

const pinSchema = new Schema({},{timestamps: true});

export const pinModel = mongoose.model('Pin', pinSchema);