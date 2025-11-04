import { Router } from "express";
import { getAll } from "../controllers/teams/controller";

const router = Router()

router.get('/', getAll)

export default router