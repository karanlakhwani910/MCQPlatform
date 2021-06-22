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

const couchPotatoBBTQuestion = mongoose.model("BBT", questionSchema);

const circuitronQuestion = conn.circuitron.model("Question", questionSchema);
// const circuitronQuestion = conn.circuitron.model("Question", questionSchema);
// const circuitronQuestion = conn.circuitron.model("Question", questionSchema);
// const circuitronQuestion = conn.circuitron.model("Question", questionSchema);
// const circuitronQuestion = conn.circuitron.model("Question", questionSchema);
// const circuitronQuestion = conn.circuitron.model("Question", questionSchema);

const xenatusBloodRelationQuestion = conn.xenatus.model("question-1", questionSchema);
const xenatusDiagramaticQuestion = conn.xenatus.model("question-4", questionSchema);
const xenatusNumericalQuestion = conn.xenatus.model("question-2", questionSchema);
const xenatusQuantitiveQuestion = conn.xenatus.model("question-3", questionSchema);
const xenatusQuestion=conn.xenatus.model("Question",questionSchema);

const c2cQuestionSet1 = conn.c2c.model("question-set-1", questionSchema);
const c2cQuestionSet2 = conn.c2c.model("question-set-2", questionSchema);
const c2cQuestionSet3 = conn.c2c.model("question-set-3", questionSchema);

module.exports = {
  couchPotatoBBTQuestion,
  circuitronQuestion,
  xenatusQuestion,
  xenatusBloodRelationQuestion,
  xenatusDiagramaticQuestion,
  xenatusNumericalQuestion,
  xenatusQuantitiveQuestion,
  c2cQuestionSet1,
  c2cQuestionSet2,
  c2cQuestionSet3
};
