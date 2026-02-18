const mongoose = require("mongoose");
const { UserModel } = require("./UserEntity");
//const { LocalisedContentSchema } = require("./LocalisedContentSchema")

// schemaVariable = new mongoose.Schema(fields, options)
const JournalSchema = new mongoose.Schema(
  // fields
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  // options
  {
    timestamps: true,
  },
);

const JournalModel = mongoose.model("Journal", JournalSchema);

module.exports = {
  JournalSchema,
  JournalModel
}