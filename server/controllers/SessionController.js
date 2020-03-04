const {Session, Question, Answer} = require('../models')

module.exports = {
    async list( req,res){
        try{
            const sessions = await Session.findAll()
            res.send(sessions)
        } catch (e) {
            console.log(e)
            res.status(500).send({error:"Une erreur est survenue"})
        }
    },
    async get( req,res){
        try{
            const session = await Session.findByOne({
                where: {
                    id : req.params.sessionId
                },
                include: [Question, Answer]
            })
            res.send(session)
        } catch (e) {
            console.log(e)
            res.status(500).send({error:"Une erreur est survenue"})
        }
    },
    async create( req, res){
        try{
            const session = await Session.create(req.body)
            res.send(session)
        } catch (e) {
            console.log(e)
            res.status(500).send({error:"Une erreur est survenue"})
        }
    },
    async update( req, res){
         try{
            await Session.update(req.body, {
                where: {
                    id: req.params.sessionId
                }
            })
            res.send(req.body)
         } catch (e){
            console.log(e)
            res.status(500).send({error:"Une erreur est survenue"})
         }
    }
}
