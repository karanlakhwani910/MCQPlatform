const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
var conn=require("../db/mongoose");


const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    // email:{
    //     type:String,
    //     required:true,
    //     unique:true,
    //     trim:true,
    //     lowercase:true,
    //     validate(value){
    //         if(!validator.isEmail(value)){
    //             throw new Error("email is invalid")
    //         }

    //     }
    // },
    password:{
        type:String,
        trim:true,
        minlength:7,
        validate(value){
            // value.toLowerCase()==='password'
            if(value.toLowerCase().includes('password')){
                throw new Error("this password is not allowed")
            }
            
        }
    },
    score:{
        type:Number,
        required:false
    },
    correctAnswers:{
        type:Number,
        required:false
    },
    incorrectAnswers:{
        type:Number,
        required:false
    },

    // avatar:{
    //     type:Buffer
    // }
    tokens:[{token:{
        type:String,
        required:true
    }}],
},{timestamps:true})

userSchema.virtual('responses',{
    ref:'Response',
    localField:'_id',
    foreignField:'owner'
})


// userSchema.methods.toJSON=function(){
//     const user=this
//     const userObject=user.toObject()

//     delete userObject.password
//     delete userObject.tokens
//     delete userObject.avatar
//     return userObject
// }


// userSchema.statics.findByCredentials=async(username,password)=>{
//     const user=await User.findOne({username})
//     console.log(user);
//     if(!user){
//         throw new Error('Unable to login')
//     }

//     const isMatch=await bcrypt.compare(password,user.password)

//     if(!isMatch){
//         throw new Error("Unable to login")
//     }   
    
//     return user
// }



userSchema.methods.generateAuthToken=async function(){
    const user=this
    const token=jwt.sign({_id:user._id.toString()},"mcqPlatform",{
        expiresIn: '60m'
     })
    user.tokens=user.tokens.concat({token})
    await user.save()
    
    return token

}


// //hash the plain text password before saving
// userSchema.pre('save',async function(next){
//     const user=this

//     if (user.isModified('password')){
//         user.password=await bcrypt.hash(user.password,8)
//     }
    

//     next()
// })


const circuitronUser = mongoose.model("User", userSchema);
const couchPotatoUser=conn.couchPotato.model("User",userSchema);
const xenatusUser=conn.xenatus.model("User",userSchema);
const c2cUser=conn.c2c.model("User",userSchema);

module.exports={couchPotatoUser,circuitronUser,xenatusUser,c2cUser}


// List of mcqs 
// Their list of answers
// The correct answer or answers
// Points for each correct answer 

// The answers he/she chose .
// Total correct answers he chose.
// Total wrong answers
// Total points gained 
// Total questions attempted