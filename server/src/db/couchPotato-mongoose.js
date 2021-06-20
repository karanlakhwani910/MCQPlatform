const mongoose=require('mongoose')
//
// mongodb://127.0.0.1:27017/Xenia-mcq-platform
mongoose.connect("mongodb+srv://couch_user_real:couch_user_real@couch-potato.dctjw.mongodb.net/Round-1",{ //process.env.MONGODB_URL
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
})
