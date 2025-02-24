const express = require("express");

const app = express();
const tokenRoute = require("./routes/token"); // Import routes

// Use the token route
app.use("/token", tokenRoute); // <-- This registers the "/token" route properly

app.listen(5000, () => {
    console.log("Server running on port 5001");
});

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Mpesa programming in progress, Time to get paid");
});


