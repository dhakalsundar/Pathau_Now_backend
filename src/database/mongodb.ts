import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export async function connectDatabase(){
    try {
   await mongoose.connect(String( process.env.MONGODB_URI));       
    console.log("Connected to MongoDB");
        return;
    } catch (error: any) {
        console.error("Database Error:", error.message || error);
        try {
            console.log("Attempting to start in-memory MongoDB for development...");
            const { MongoMemoryServer } = await import('mongodb-memory-server');
            const mongod = await MongoMemoryServer.create();
            const uri = mongod.getUri();
            await mongoose.connect(uri);
            console.log("Connected to in-memory MongoDB");
            return;
        } catch (memErr) {
            console.error("In-memory MongoDB failed:", memErr);
            process.exit(1);
        }
    }
}