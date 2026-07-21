import express from "express";
import cors from "cors";

import healthRoutes from "./routes/healthRoutes.js";
import solveRoutes from "./routes/solveRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Rubik Cube Solver Backend Running",
  });
});

app.use("/api/health", healthRoutes);
app.use("/api/solve", solveRoutes);

export default app;