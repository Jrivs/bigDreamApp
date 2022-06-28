import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/javaScriptDB')
        .then(db => console.log('DB is Connected'))
        .catch(err => console.log(err))