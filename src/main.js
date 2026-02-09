// import the app
const {app} = require("./server")

// get the PORT env var
const PORT = process.env.PORT || 3000;

// run the server
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`)
});

// connect to db