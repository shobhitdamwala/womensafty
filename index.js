import express from "express";
import dbConnection from "./connections/mongoConnection.js";
import userRoutes from "../Backend/Routes/userRoutes.js";
import bodyParser from "body-parser";
import admin from "./Routes/adminRoute.js";



const app = express();
const PORT = 8000;


// Middleware
app.use(bodyParser.json()); // Enable parsing of JSON requests
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1", userRoutes);
app.use("/api/v1",admin)

// Database connection
dbConnection();

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});
