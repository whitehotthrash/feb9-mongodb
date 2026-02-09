// import the app
const { app } = require("./server");
const { dbConnect } = require("./utils/database")

// get the PORT env var
const PORT = process.env.PORT || 3000;

// run the server
// app.listen(PORT, () => {
//   await.dbConnect();
//   console.log(`server is running on http://localhost:${PORT}`);
// });

// connect to db
dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
  });
});

// thingOne().then(() => {
//   thingTwo()
// })
