import express from "express";
import cors from "cors";
import tripRouter from "./routers/tripsRouter.js";

const app = express();
const port = 3000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  }),
);

app.use(express.json());

app.use("/trips", tripRouter);

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
