const mongoose = require("mongoose");
const { UserModel } = required("./UserEntity");

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
      require: true,
    },
    author: {
      type: UserModel,
      required: true,
    },
  },
  // options
  {
    timestamps: true,
    // createdAt and updatedAt automatically
  },
);
