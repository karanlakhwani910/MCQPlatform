const express = require("express");
const cron = require("node-cron");
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken")

const auth = require("../middleware/auth");
const {xenatusLogicalQuestion,xenatusBloodRelationQuestion,xenatusNumericalQuestion,xenatusDiagramaticQuestion,xenatusQuantitiveQuestion,xenatusLogicalQuestion2,xenatusBloodRelationQuestion2,xenatusNumericalQuestion2,xenatusDiagramaticQuestion2,xenatusQuantitiveQuestion2} = require("../models/question");
const {xenatusResponse} = require("../models/response");
const {xenatusMainSiteUser} = require("../models/main-site-user");

const router = new express.Router();

// router.post("/createQuestion", async (req, res) => {
//   try {
//     const question = new Question(req.body);
//     await question.save();
//     res.status(201).send(question);
//   } catch (e) {
//     console.log(e);
//     res.status(400).send(e);
//   }
// });

// router.post("/readQuestion", async (req, res) => {
//   try {
//     const question = await Question.findOne({ _id: req.body._id });
//     res.status(201).send(question);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// router.patch("/updateQuestion", async (req, res) => {
//   try {
//     const question = await Question.findOneAndUpdate(
//       { _id: req.body._id },
//       {
//         marked: req.body.marked,
//         selectedAnswer: req.body.selectedAnswer,
//       }
//     );
//     await question.save();
//     res.status(201).send(question);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// router.delete("/deleteQuestion", async (req, res) => {
//   try {
//     const question = await Question.findOneAndDelete({ _id: req.body._id });
//     res.status(201).send(question);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

//to fetch questions

router.post("/fetchQuestions", async (req, res) => {
  try {
    xenatusBloodRelationQuestion2.findRandom({}, {}, { limit: 7 }, function (err, results) {
      if (err) {
        console.log(err);
      } else {
        var newresults=results.map((question)=>{
            question.correctAnswer=((question.correctAnswer+5)**7)%33;
                        return question;
        })
        console.log("value of new results is",newresults)
        xenatusNumericalQuestion2.findRandom({}, {}, { limit: 7 }, function (err, results) {
          if (err) {
            console.log(err);
          } else {
            var newresults2=results.map((question)=>{
                question.correctAnswer=((question.correctAnswer+5)**7)%33;
                            return question;
            })
            console.log("value of new results is",newresults2)
            var finalarray=newresults.concat(newresults2);
            xenatusQuantitiveQuestion2.findRandom({}, {}, { limit: 8 }, function (err, results) {
              if (err) {
                console.log(err);
              } else {
                var newresults3=results.map((question)=>{
                    question.correctAnswer=((question.correctAnswer+5)**7)%33;
                                return question;
                })
                console.log("value of new results is",newresults3)
                var finalarray2=finalarray.concat(newresults3);
                xenatusDiagramaticQuestion2.findRandom({}, {}, { limit: 5 }, function (err, results) {
                  if (err) {
                    console.log(err);
                  } else {
                    var newresults4=results.map((question)=>{
                        question.correctAnswer=((question.correctAnswer+5)**7)%33;
                                    return question;
                    })
                    console.log("value of new results is",newresults4)
                    var finalarray3=finalarray2.concat(newresults4)
                    xenatusLogicalQuestion2.findRandom({}, {}, { limit: 8 }, function (err, results) {
                      if (err) {
                        console.log(err);
                      } else {
                        var newresults5=results.map((question)=>{
                            question.correctAnswer=((question.correctAnswer+5)**7)%33;
                                        return question;
                        })
                        console.log("value of new results is",newresults5)
                        var finalarray4=finalarray3.concat(newresults5)
                // console.log("after adding value of new results",newresults,newresults2)
                        res.status(200).send(finalarray4);
                      }
                    })
                  }
                })
              }
          
    
            })
          }

        })
        
      }

    });
    
  }catch (e) {
    res.status(400).send(e);
  }
});

// saveResponse stores the response of the user in the database
router.post("/saveResponse/:authToken", auth, async (req, res) => {
  try {
    console.log("in endpoint for xenatus")
    const responsesArrray = req.body;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var score = 0;
    responsesArrray.map((question) => {
      if (question.marked === true) {
        if (parseInt(question.selectedAnswer) === (((question.correctAnswer**3)%33)-5)) {
          score += question.pointsForQuestion;
          correctAnswers++;
        } else {
          incorrectAnswers++;
        }
      }
    });
    const response = new xenatusResponse({ questions: req.body, owner: req._id });
    const user = await xenatusMainSiteUser.findOneAndUpdate(
      { _id: req._id },
      { $set: { score, correctAnswers, incorrectAnswers } }
    );
    console.log(user);
    console.log(response);
    res.send({ score });
    await response.save();
  } catch (e) {
    res.status(400).send(e);
  }
});

var time = 1800;
var task;

router.post("/getTime/:authToken", auth, async (req, res) => {
  // if(req.body.time==="first time")
  // {
  //     task=60;
  // }
  if (task) {
    task.stop();
  }
  task = cron.schedule("*/1 * * * * * ", async () => {
    time--;
    if (time<=-2)
    {
      this.stop();
    }
    console.log(time);
  });
  // task.stop();
  task.start();
  res.json({ time, status: "success" });
});

// router.get('/stopTime',async(req,res)=>{
//     task.stop();
// })

router.post("/login", async (req, res) => {
  try {
    // console.log("In endpoint,username and password is",req.body);
    // const user=new xenatusMainSiteUser({name:"kshitij deshpande",college:"pict",CA:"",phone:"9518535604",branch:"IT",year:"SE",event:"Xenatus",email:req.body.username,password:req.body.password});
    // bcrypt.genSalt(10,async (err, salt) => {
    //     bcrypt.hash(user.password, salt,async (err, hash) => {
    //       if (err) throw err;
    //       user.password = hash;
    //       console.log(hash);
    //       console.log(user);
    //       await user.save();
    //     });
    //   });
    // await user.save();
    const date=new Date();
    console.log("current date is",date.toLocaleString());
    const prevDate=new Date(2021, 5, 22, 8, 33, 30, 0);
    console.log("prev date is",prevDate.toLocaleString())
    const nextDate=new Date(2021, 5, 23, 23, 59, 30, 0);
    console.log("next date is",nextDate.toLocaleString())
    // console.log("current compared to prev",prevDate<date,nextDate>date);
    
    if(!(date>prevDate&&date<nextDate))
    {
      res.json({ status: "Error", message: "Wait for your slot!" });
    }

    else{
    // const user=await circuitronUser.findOne({username:req.body.username})

    const user=await xenatusMainSiteUser.findOne({email:req.body.username})

    console.log(user);
    if(!user){
        throw new Error('Unable to login')
    }

    const isMatch=await bcrypt.compare(req.body.password,user.password)

    if(!isMatch){
        throw new Error("Unable to login")
    }
    const token=jwt.sign({_id:user._id.toString()},"mcqPlatform",{
      expiresIn: '31m'
   })
    user.tokens=user.tokens.concat({token})
    await user.save()

    res.json({
      status: "Success",
      user: user,
      currentToken: token,
      message: "Successfully logged in!",
    });
  }
    // res.json({status:"Success",user:user})
    } catch (e) {
    console.log("Error:", e);
    res.json({ status: "Error", message: "Invalid Credentials" });
  }
});

module.exports = router;
