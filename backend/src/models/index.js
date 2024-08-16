import mongoose from 'mongoose';
import {URI, dbName} from '../constants.js'

const connectdb = async function () {
   try {
     const connectionInstance = await mongoose.connect(`${URI}/${dbName}`)
     console.log(`Successfully connected ! ${connectionInstance.connection.host}`)
   } catch (err) {
        console.log('MongoDB Err..:', err);
        process.exit(1);
   }
}

export default connectdb;