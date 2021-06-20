const mongoose=require('mongoose')
//
// mongodb://127.0.0.1:27017/Xenia-mcq-platform
mongoose.connect("mongodb+srv://couch_potato_user:couch_potato_user@couch-potato.g9qjz.mongodb.net/Circuitron",{ //process.env.MONGODB_URL
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
})
