const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema(
  {
    questions: [
      {
        answers: [
          {
            id: String,
            text: String,
          },
        ],
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

const Response = mongoose.model("Response", responseSchema);

module.exports = Response;
