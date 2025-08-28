// Import the Express module
const express = require("express");

// Create an Express application
const app = express();

// A middleware function that runs for every incoming request
app.use((req, res, next) => {
    // Add a custom property 'time' to the request object with the current timestamp
    req.time = new Date(Date.now()).toString();

    // Log details of the request: HTTP method, hostname, path, and time
    console.log(req.method, req.hostname, req.path, req.time);

    // Pass control to the next middleware or route handler
    return next();
});

// Define a GET route for the root URL ("/")
app.get("/", (req, res) => {
    // Send a simple response when the root is accessed
    res.send("req working");
});

// Define another GET route for "/random"
app.get("/random", (req, res) => {
    // Send a simple response for the /random endpoint
    res.send("I am random");
});

// Start the server on port 8080 and log a message once it's running
app.listen(8080, () => {
    console.log("listening to port 8080...");
});
