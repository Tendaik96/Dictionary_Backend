const express = require("express");
const defRouter = express.Router();

const { getDefinition } = require("../models/definition");

//get request, it take 2 arguements - the path and a function
defRouter.get("/:word", async function (req, res) {

    console.log(req.params) 
    
  const defined = await getDefinition(req.params);
    res.json({
        success: true,
        payload: defined
    });
});

module.exports = {defRouter};
