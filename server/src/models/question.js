const mongoose = require("mongoose");
var randomGenerator = require("mongoose-simple-random");
var conn = require("../db/mongoose");

const questionSchema = new mongoose.Schema(
  {
    answers: {
      type: [String],
    },
    content: {
      type: String,
      required: true,
    },
    marked: {
      type: Boolean,
      required: true,
      default: false,
    },
    selectedAnswer: {
      type: Number,
      required: false,
    },
    correctAnswer: {
      type: Number,
      required: true,
    },
    pointsForQuestion: {
      type: Number,
      required: true,
      default: 10,
    },
    image: {
      type: String,
      required: false,
    },
    // avatar:{
    //     type:Buffer
    // }
    // owner:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     required:false,
    //     ref:"User"

    // }
  },
  { timestamps: true }
);

questionSchema.plugin(randomGenerator);

const couchPotatoQuestion = mongoose.model("Question", questionSchema);
const circuitronQuestion = conn.circuitron.model("Question", questionSchema);
const xenatusQuestion = conn.xenatus.model("Question", questionSchema);
const c2cQuestionSet1 = conn.c2c.model("question-set-1", questionSchema);
const c2cQuestionSet2 = conn.c2c.model("question-set-2", questionSchema);

module.exports = {
  couchPotatoQuestion,
  circuitronQuestion,
  xenatusQuestion,
  c2cQuestionSet1,
  c2cQuestionSet2,
};
