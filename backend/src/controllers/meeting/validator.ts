import Joi from "joi";

export const meetingsByTeamIdValidator = Joi.object({
    teamId: Joi.string().uuid().required()
})

export const createMeetValidator = Joi.object({
    teamId: Joi.string().uuid().required(),
    startTime: Joi.required(),
    endTime: Joi.required(),
    description: Joi.string().min(2).required(),
    meetRoom: Joi.string().min(1).required()
})