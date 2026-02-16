// code to run that will connect to the db
// and see default data in some models

const { UserModel } = require("../database/UserEntity");

async function seed() {
  console.log("Seed file starting!");

  // 1. find user to use in our seeding
  let seedUser = UserModel.findOne({})
  // seedUser = UserModel.findById("2907852yh5234523rffwefw323");

  // 2. mark articles that refer to the user from step1
  // seeded articles all belong to user with ID of duiysgh243hg4kjh5g34k
  let articlesToSeed = [
    {
      title: "Seed Article 01",
      body: "Sample data lorem ipsum dolor sit amet consectitur",
      author: "2h345jh243j5g34hj534543",
      // author: seedUser.id
      // author: seedUser._id
    }
  ]

  // method 1
  //


  console.log("Seed file completed!");
}

seed();
