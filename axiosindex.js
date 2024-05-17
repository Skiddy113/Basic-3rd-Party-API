//code for 3rd party api crud methods using axios lib
const mongoose = require("mongoose");
const axios = require("axios");
const express = require("express");
const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//display users of 3rd party api
app.get("/api/resource", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//3rd party post method for adding
app.post("/api/resource", async (req, res) => {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//3rd party put for updating
app.put("/api/resource", async (req, res) => {
  try {
    const response = await axios.put(
      "https://jsonplaceholder.typicode.com/posts/1",
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//3rd party patch for updating
app.patch("/api/resource", async (req, res) => {
  try {
    const response = await axios.patch(
      "https://jsonplaceholder.typicode.com/posts/1",
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//3rd party delete
app.delete("/api/resource", async (req, res) => {
  try {
    const response = await axios.delete(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Connecting with MongoDB
mongoose
  .connect(
    "mongodb+srv://admin:nodeAPI1@backend.ybcklkj.mongodb.net/TDL-API?retryWrites=true&w=majority&appName=Backend"
  )
  .then(() => {
    console.log("Connected to DB");
    const port = process.env.PORT || 8080;
    app.listen(port, () => console.log(`Running on port ${port}...`));
  })
  .catch((error) => {
    console.error("Connection Failed", error);
  });
