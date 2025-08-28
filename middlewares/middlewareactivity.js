const express = require("express");
const app = express();
const ExpressError = require("./expresserror");

// ------------------- Middleware Section -------------------
app.use("/api", (req, res, next) => {
    let { token } = req.query;

    if (token === "giveaccess") {
        next(); // proceed to API route
    } else {
        throw new ExpressError(401, "access denied");
    }
});

// ------------------- Route Handlers -------------------
app.get("/", (req, res) => {
    res.send("root here");
});

app.get("/err", (req, res) => {
    abcd = abcd; // will trigger ReferenceError
});

app.get("/api", (req, res) => {
    res.send("Welcome");
});

app.get("/admin", (req,res)=>{
    throw new ExpressError(403,"Access is forbidden");
})

// ------------------- Error Handling Middleware -------------------
app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong" } = err;
    res.status(status).json({
        status,
        message
    });
});

// ------------------- Server Setup -------------------
app.listen(8080, () => {
    console.log("listening to port 8080...");
});
