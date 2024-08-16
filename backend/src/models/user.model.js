import mongoose, {Schema} from 'mongoose';

const userSchmea = new Schema({},{timestamps:true});

export const userModel = mongoose.model('User', userSchmea);