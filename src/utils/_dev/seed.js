// code to run that will connect to the db
// and see default data in some models

const { dbConnect, dbDisconnect } = require("../database");
const { UserModel } = require("../database/UserEntity");
const { ArticleModel } = require("../database/ArticleEntity");

async function seed() {
  console.log("Seed file starting!");

  await dbConnect();

  // 1. find user to use in our seeding
  //let seedUser = await UserModel.findOne({})
  //let seedUser = UserModel.findById("698c4669d5a1e492141ad3fb");

  // 2. mark articles that refer to the user from step1
  // seeded articles all belong to user with ID of 698c4669d5a1e492141ad3fb
  let articlesToSeed = [
    {
      title: "Seed Article 01",
      body: "Sample data lorem ipsum dolor sit amet consectitur",
      author: "698c4669d5a1e492141ad3fb",
      // author: seedUser.id
      // author: seedUser._id
    }
  ]

  // method 1 loop through articlesToSeed and make articles one by one
  // method 2 provide the seed data array to model.insertMany - simpler

  let seedResult = await ArticleModel.insertMany(articlesToSeed)
  console.log(seedResult)


  dbDisconnect();
  console.log("Seed file completed!");
}

seed();
