import express from "express";
import { solveCube } from "../controllers/solveController.js";

const router = express.Router();

router.post("/", solveCube);

export default router;