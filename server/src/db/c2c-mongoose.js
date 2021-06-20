const mongoose=require('mongoose')
//
// mongodb://127.0.0.1:27017/Xenia-mcq-platform
mongoose.connect("mongodb+srv://c2c_user:c2c_user@cluster0.wc4y4.mongodb.net/C2c",{ //process.env.MONGODB_URL
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
})
