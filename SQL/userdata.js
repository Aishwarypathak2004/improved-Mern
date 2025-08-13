const { faker } = require("@faker-js/faker"); // Import faker library to generate random fake data
const mysql = require("mysql2"); // Import mysql2 library for MySQL database connection
const express = require("express"); // Import express framework for creating server and handling routes
const app = express(); // Create an express application instance
const path = require("path"); // Import path module to work with file and directory paths
const methodOverride = require("method-override"); // Import method-override to support PUT and DELETE requests in forms

app.use(methodOverride("_method")) // Use method-override middleware to handle HTTP methods via query parameter
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded form data

app.set("view engine", "ejs"); // Set view engine to EJS for rendering dynamic HTML templates
app.set("views", path.join(__dirname, "/views")); // Set the views directory path

// Function to generate a random user object using faker
let getRandomUser = () => {
  return {
    userId: faker.string.uuid(), // Generate unique user ID
    username: faker.internet.username(), // Generate random username
    email: faker.internet.email(), // Generate random email
    password: faker.internet.password(), // Generate random password
  };
}

// Create MySQL database connection
const connection = mysql.createConnection({
  host: 'localhost', // Database host
  user: 'root', // Database username
  database: 'USER_DATA', // Database name
  password: '@yash123' // Database password
});

// Route: Home page - displays total number of employees in database
app.get("/", (req, res) => {
  let q = 'SELECT count(*) FROM Employee';
  try {
    connection.query(q, (err, result) => {
      if (err) throw err; // If error in query, throw error
      let count = result[0]["count(*)"]; // Extract count from query result
      res.render("home.ejs", { count }); // Render home page with count
    });
  } catch (err) {
    console.log(err);
    res.send("some problem");
  }
});

// Route: Display all users
app.get("/user", (req, res) => {
  let q = `SELECT * FROM Employee`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      res.render("show.ejs", { result }); // Render page with all user data
    });
  } catch (err) {
    console.log(err);
    res.send("some problem");
  }
});

// Route: Edit user page (fetch user by ID)
app.get("/user/:userId/edit", (req, res) => {
  let { userId } = req.params; // Get userId from URL params
  q = `SELECT * FROM EMPLOYEE WHERE userId='${userId}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0]; // Extract user data
      res.render("edit.ejs", { user }); // Render edit form with user data
    });
  } catch (err) {
    console.log(err);
    res.send("some problem");
  }
});

// Route: Update user details (PATCH request)
app.patch("/user/:userId", (req, res) => {
  let { userId } = req.params;
  let { password: formpass, username: newUsername } = req.body; // Get form input
  q = `SELECT * FROM EMPLOYEE WHERE userId='${userId}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formpass != user.password) { // Password verification
        res.send("Wrong Password");
      } else {
        let q2 = `UPDATE Employee SET username='${newUsername}' WHERE userId='${userId}'`; // Update username
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user"); // Redirect to user list
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some problem");
  }
});

// Route: Add user form
app.get("/user/new", (req, res) => {
  res.render("adduser.ejs"); // Render add user form
});

// Route: Insert new user into database
app.post("/user/new", (req, res) => {
  let { userId: uid, username: uname, email: em, password: pass } = req.body;
  let q3 = `INSERT INTO EMPLOYEE (userId,username,email,password) VALUES(?,?,?,?)`;
  try {
    connection.query(q3, [uid, uname, em, pass], (err, result) => {
      if (err) throw err;
      res.redirect("/user"); // Redirect after insertion
    });
  } catch (err) {
    console.log(err);
    res.send("some problem");
  }
});

// Route: Delete user form page
app.get("/user/:userId", (req, res) => {
  let { userId: u } = req.params;
  res.render("dlt.ejs", { u }); // Render delete confirmation page
});

// Route: Delete user from database
app.delete("/user/:userId", (req, res) => {
  let { userId: u } = req.params;
  try {
    q = `SELECT * FROM Employee WHERE userId='${u}'`;
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      let { email: ema, password: pswd } = req.body; // Get credentials from form
      if (ema == user.email && pswd == user.password) { // Verify credentials
        let q4 = `DELETE FROM Employee WHERE userId='${u}'`; // Delete user
        try {
          connection.query(q4, (err, result) => {
            if (err) throw err;
            res.redirect("/user"); // Redirect after deletion
          });
        } catch (err) {
          console.log(err);
          res.send("some problem");
        }
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some problem");
  }
});

// Start server on port 8080
app.listen("8080", () => {
  console.log("server is listning to the port 8080");
});
