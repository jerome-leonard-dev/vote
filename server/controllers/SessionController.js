const {Session, Question, Answer} = require('../models')

const crypto = require('crypto')

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
            const session = await Session.findOne({
                where: {
                    id : req.params.sessionId
                },
                include: [
                    {
                        model: Question,
                        include : [Answer]
                    }
                ]
            })
            res.send(session)
        } catch (e) {
            console.log(e)
            res.status(500).send({error:"Une erreur est survenue"})
        }
    },
    async create( req, res){
        try{
            req.body.hash = crypto.randomBytes(20).toString('hex')
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
