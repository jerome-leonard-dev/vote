const {Session} = require('../models')

module.exports = {
    async list( req,res){
        try{
            const sessions = await Session.findAll()
            res.send(sessions)
        } catch (e) {
            console.log(e)
            res.status(500).send({error:e})
        }
    },
    async create( req, res){
        try{
            const session = Session.create(req.body)
            res.send(session)
        } catch (e) {
            res.status(500).send({error:e})
        }
    },
    async update( req, res){
         try{
             
         } catch (e){
             res.status(500).send({})
         }
    }
}
