const express = require("express");
const axios = require("axios");
const cors  = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const UNSPLASH_API_KEY = process.env.UNSPLASH_API_KEY;

console.log("server started!");
app.listen(5000, () => {
  console.log("The server is running in the port 5000");
});
app.get("/", (req, res)=>{
  res.json("Hello from the server")
  next();
})

app.get("/dashboard", async (req, res) => {
  // console.log("Error: ", req)
  try {
    // await console.log("QUERY: ", req.query)
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${req.query.query}&count=30&client_id=${UNSPLASH_API_KEY}`
    );
    const data = await response.json();
    
     console.log("fetched data inside the fetchcall: ", await data);
    
    res.json(data);
  } catch (error) {
    console.log(
      "Error while getting from unsplash: ", error );
      res.status(500)
  }
});

