import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.listen(PORT, () => console.log(
    `Server listening on PORT ${PORT}`
));