const mongoose = require("mongoose");
var conn=require("../db/mongoose");

const responseSchema = new mongoose.Schema(
  {
    questions: [
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
        image:{
          type:String,
          required:false
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
        // avatar:{
        //     type:Buffer
        // }
      },
    ],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "User",
    },
  },
  { timestamps: true }
);

const couchPotatoResponse = mongoose.model("Response", responseSchema);
const circuitronResponse=conn.circuitron.model("Response",responseSchema);
const xenatusResponse=conn.xenatus.model("Response",responseSchema);
const c2cResponse=conn.c2c.model("Response",responseSchema)

module.exports = {couchPotatoResponse,circuitronResponse,xenatusResponse,c2cResponse};
