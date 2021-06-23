const mongoose=require('mongoose')
//
// mongodb://127.0.0.1:27017/Xenia-mcq-platform
mongoose.connect("mongodb+srv://couch_potato_user:couch_potato_user@couch-potato.g9qjz.mongodb.net/Circuitron",{ //process.env.MONGODB_URL
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
})

mongoose.couchPotato=mongoose.createConnection("mongodb+srv://couch_user_real:couch_user_real@couch-potato.dctjw.mongodb.net/Round-1",{ //process.env.MONGODB_URL
useNewUrlParser:true,
useCreateIndex:true,
useFindAndModify:false
})

mongoose.couchPotato2=mongoose.createConnection("mongodb+srv://couch_user_real:couch_user_real@couch-potato.dctjw.mongodb.net/Round-2",{ //process.env.MONGODB_URL
useNewUrlParser:true,
useCreateIndex:true,
useFindAndModify:false
})

mongoose.couchPotato=mongoose.createConnection("mongodb+srv://couch_user_real:couch_user_real@couch-potato.dctjw.mongodb.net/Round-1",{ //process.env.MONGODB_URL
useNewUrlParser:true,
useCreateIndex:true,
useFindAndModify:false
})

mongoose.xenatus=mongoose.createConnection("mongodb+srv://xenatus_user:xenatus_user@xe-natus.0yjzp.mongodb.net/Xenatus",{ //process.env.MONGODB_URL
useNewUrlParser:true,
useCreateIndex:true,
useFindAndModify:false
})

mongoose.c2c=mongoose.createConnection("mongodb+srv://ctc_user:ctc_user@ctc.13csz.mongodb.net/ctc",{ //process.env.MONGODB_URL
useNewUrlParser:true,
useCreateIndex:true,
useFindAndModify:false
})

module.exports=mongoose;