import mongoose from "mongoose";

const uri = "mongodb+srv://helpwomenacccc:1chKY7cbkHzdt1oV@cluster0.dsu8z.mongodb.net/?retryWrites=true&w=majority";

const dbConnection = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
    }
}

export default dbConnection;
