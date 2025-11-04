import { NextFunction, Request, Response } from "express";
import Meet from "../../models/Meet";
import Team from "../../models/Team";

// import { Op } from 'sequelize'

export async function filterByTeam(req: Request<{teamId: string}>, res: Response, next: NextFunction) {
    try {
        const { meetings } = await Team.findByPk(req.params.teamId, {
            include: [Meet]
        })
        res.json(meetings)
    } catch (e) {
        next(e)
    }
}

// export async function filterByMaxPrice(req: Request, res: Response, next: NextFunction) {
//     try {
//         const games = await Game.findAll({
//             where: {
//                 price: {
//                     [Op.lte]: req.query.maxPrice
//                 }
//             },
//             include : [Audience]
//         })
//         res.json(games)
//     } catch (e) {
//         next(e)
//     }
// }

export async function createMeet(req: Request, res: Response, next: NextFunction) {

    try {
        const newMeet = await Meet.create(req.body)
        await newMeet.reload({include: Team})
        res.json(newMeet)
    } catch (e) {
        next(e)
    }
}
