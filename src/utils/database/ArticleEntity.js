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
    // someUser.id - string version
    // someUser._id - objectID version
    author: {
      type: mongoose.Types.ObjectID,
      ref: "User",
      required: true,
    },
  },
  // options
  {
    timestamps: true,
    // createdAt and updatedAt automatically
  },
);
