import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  }),
);

app.use(express.json());

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});

//Testing db connection
import connection from "./database/connectionDb.js";
app.get("/", (req, res) => {
  connection.query("SELECT 1", (err, results) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }

    res.json({
      message: "Connessione al database riuscita",
      results,
    });
  });
});
//------
