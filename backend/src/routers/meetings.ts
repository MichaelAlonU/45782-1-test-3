import { Router } from "express";
import { createMeet, /*filterByMaxPrice,*/ filterByTeam } from "../controllers/meeting/controller";
import { createMeetValidator, meetingsByTeamIdValidator } from "../controllers/meeting/validator";
import paramValidation from "../middlewares/param-validation";
import validation from "../middlewares/validation";

const router = Router()

router.get('/by-team/:teamId', paramValidation(meetingsByTeamIdValidator) , filterByTeam)
// router.get('/by-max-price', filterByMaxPrice)
router.post('/', validation(createMeetValidator), createMeet)

export default router