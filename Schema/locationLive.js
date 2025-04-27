import mongoose from "mongoose";

const LocationLiveSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    address: { type: String, required: true },
    city: { type: String, default: "Unknown City" },
    state: { type: String, default: "Unknown State" },
    country: { type: String, default: "Unknown Country" },
    postalCode: { type: String, default: "Unknown Postal Code" },
    timestamp: { type: Date, default: Date.now },
});

const locationLive = mongoose.model("LocationLive", LocationLiveSchema);

export default locationLive;