//code for 3rd party api crud methods using fetch lib
const mongoose = require("mongoose");
const List = require("./models/list.models.js");
const express = require("express");
const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//display users of 3rd party api
app.get("/api", async (req, res) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      return res.json(json);
    });
});

//3rd party post method for adding
app.post("/api", async (req, res) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(req.body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      return res.json(json);
    });
});

//3rd party put for updating
app.put("/api", async (req, res) => {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify(req.body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      return res.json(json);
    });
});

//3rd party patch for updating
app.patch("/api", async (req, res) => {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify(req.body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      return res.json(json);
    });
});

//3rd party delete
app.delete("/api", async (req, res) => {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((json) => {
      return res.json(json);
    });
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
