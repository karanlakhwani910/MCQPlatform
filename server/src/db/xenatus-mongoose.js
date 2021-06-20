const mongoose=require('mongoose')
//
// mongodb://127.0.0.1:27017/Xenia-mcq-platform
mongoose.connect("mongodb+srv://xenatus_user:xenatus_user@xe-natus.0yjzp.mongodb.net/Xenatus",{ //process.env.MONGODB_URL
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
})
