const mongoose = require("mongoose");
const { UserModel } = require("./UserEntity");
const { LocalisedContentSchema } = require("./LocalisedContentSchema")

// schemaVariable = new mongoose.Schema(fields, options)
const ArticleSchema = new mongoose.Schema(
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

const ArticleModel = mongoose.model("Article", ArticleSchema);

module.exports = {
  JournalSchema,
  ArticleModel
}