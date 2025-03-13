import dotenv from 'dotenv';
dotenv.config({ path: './env' });

import connectDB from "./db/index.js"; // Correct path
import express from 'express';

const app = express();

(async () => {
    try {
        await connectDB();

        app.on("error", (error) => {
            console.log("Application can't talk to database!");
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.error("ERROR: ", error);
        throw error;
    }
})();