// Imported libraries
const express = require('express');
const mongoose = require('mongoose')
const cors=require('cors');

// Create an instance of the express application
const app = express();

// Specify the port number on which the server will listen for incoming requests
const port = 5000;

// Connect to MongoDB
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log("db connected");
}

// Middleware: Parse incoming request bodies as JSON (for handling data in the request body)
app.use(express.json());
app.use(
  cors({
    origin:"*",
    methods:["GET","POST"]
  })
)
// Middleware: Mount the routes defined in the 'router.js' file
app.use(require('./router/router'));

// Start the server, listening on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
