import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import issuesRouter from "./db/routes/issues.js";
import usersRouter from "./db/routes/users.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use("/issues", issuesRouter);
app.use("/users", usersRouter);
app.listen(PORT, () => console.log(
    `Server listening on PORT ${PORT}`
));