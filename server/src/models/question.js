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

const circuitronQuestion = mongoose.model("Question", questionSchema);

const couchPotatoBBTQuestion = conn.couchPotato.model("question-1", questionSchema);
const couchPotatoKFQuestion = conn.couchPotato.model("question-2", questionSchema);
const couchPotatoGOTQuestion = conn.couchPotato.model("question-4", questionSchema);
const couchPotatoHPQuestion = conn.couchPotato.model("question-3", questionSchema);
const couchPotatoSuitsQuestion = conn.couchPotato.model("question-6", questionSchema);
const couchPotatoNarutoQuestion = conn.couchPotato.model("question-5", questionSchema);

const xenatusBloodRelationQuestion = conn.xenatus.model("question-3", questionSchema);
const xenatusDiagramaticQuestion = conn.xenatus.model("question-4", questionSchema);
const xenatusNumericalQuestion = conn.xenatus.model("question-5", questionSchema);
const xenatusQuantitiveQuestion = conn.xenatus.model("question-1", questionSchema);
const xenatusLogicalQuestion = conn.xenatus.model("question-2", questionSchema);

const xenatusBloodRelationQuestion2 = conn.xenatus.model("question-8", questionSchema);
const xenatusDiagramaticQuestion2 = conn.xenatus.model("question-9", questionSchema);
const xenatusNumericalQuestion2 = conn.xenatus.model("question-10", questionSchema);
const xenatusQuantitiveQuestion2 = conn.xenatus.model("question-6", questionSchema);
const xenatusLogicalQuestion2 = conn.xenatus.model("question-7", questionSchema);


const c2cQuestionSet1 = conn.c2c.model("question-set-1", questionSchema);
const c2cQuestionSet2 = conn.c2c.model("question-set-2", questionSchema);
const c2cQuestionSet3 = conn.c2c.model("question-set-3", questionSchema);

module.exports = {
  couchPotatoBBTQuestion,
  couchPotatoGOTQuestion,
  couchPotatoHPQuestion,
  couchPotatoKFQuestion,
  couchPotatoNarutoQuestion,
  couchPotatoSuitsQuestion,
  circuitronQuestion,
  xenatusLogicalQuestion,
  xenatusBloodRelationQuestion,
  xenatusDiagramaticQuestion,
  xenatusNumericalQuestion,
  xenatusQuantitiveQuestion,
  xenatusLogicalQuestion2,
  xenatusBloodRelationQuestion2,
  xenatusDiagramaticQuestion2,
  xenatusNumericalQuestion2,
  xenatusQuantitiveQuestion2,
  c2cQuestionSet1,
  c2cQuestionSet2,
  c2cQuestionSet3
};
