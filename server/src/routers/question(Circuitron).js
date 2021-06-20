const express = require("express");
const cron = require("node-cron");
const bcrypt = require("bcryptjs");

const auth = require("../middleware/auth");
const Question = require("../models/question");
const Response = require("../models/response");
const User = require("../models/user");

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
    //const question=await Question.find({});

    Question.findRandom({}, {}, { limit: 5 }, function (err, results) {
      if (err) {
        console.log(err);
      } else {
        var newresults=results.map((question)=>{
            question.correctAnswer=((question.correctAnswer+5)**7)%33;
                        return question;
        })

        
        res.status(200).send(newresults);
      }
    });
  } catch (e) {
    res.status(400).send(e);
  }
});

// saveResponse stores the response of the user in the database
router.post("/saveResponse/:authToken", auth, async (req, res) => {
  try {
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
    const response = new Response({ questions: req.body, owner: req.user._id });
    const user = await User.findOneAndUpdate(
      { _id: req.user._id },
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

var time = 600;
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
    // const user=new User(req.body);
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
    console.log("current date is",date);
    const prevDate=new Date(2021, 5, 20, 8, 33, 30, 0);
    console.log("prev date is",prevDate)
    const nextDate=new Date(2021, 5, 20, 21, 33, 30, 0);
    console.log("current compared to prev",prevDate<date,nextDate<date);
    
    

    const user = await User.findByCredentials(
      req.body.username,
      req.body.password
    );
    const token = await user.generateAuthToken();
    await user.save();
    res.json({
      status: "Success",
      user: user,
      currentToken: token,
      message: "Successfully logged in!",
    });
    // res.json({status:"Success",user:user})
  } catch (e) {
    console.log("Error:", e);
    res.json({ status: "Error", message: "Invalid Credentials" });
  }
});

module.exports = router;
