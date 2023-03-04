const express = require("express");
const router = require("./routes/definition.js");

//to set up our server - by calling express we create a application that allows us to set up our entire server
const app = express();
const PORT = process.env.PORT

app.use(express.json());
app.use("/api/definition/", router);
// app is listening to port 3000 - when no routes are set up the web page should say cannot GET
app.listen(`${PORT}`, () => {
  console.log(`You are listening on PORT ${PORT}`);
});
