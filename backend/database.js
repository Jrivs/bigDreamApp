import mongoose from "mongoose";


mongoose.connect(process.env.MONGODB_URI)
        .then(db => console.log('DB is Connected'))
        .catch(err => console.log(err))