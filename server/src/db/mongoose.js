const mongoose=require('mongoose')
//
// mongodb://127.0.0.1:27017/Xenia-mcq-platform
mongoose.connect("mongodb+srv://couch_potato_user:couch_potato_user@couch-potato.g9qjz.mongodb.net/Circuitron",{ //process.env.MONGODB_URL
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
})


// const me=new User({
//     name:' baba  ',
//     email:'mike@gmail.com  ',
//     password:'phone@123!'
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log("Error:",error)
// })

// const task=new Task({description:"  Trying this with sanitization and validation"})

// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })