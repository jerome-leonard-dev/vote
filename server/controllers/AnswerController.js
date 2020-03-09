const {Answer} = require('../models')

module.exports = {
    async list( req,res){
        try{
            const answers = await Answer.findAll()
            res.send(answers)
        } catch (e) {
            console.log(e)
            res.status(500).send({error:"Une erreur est survenue"})
        }
    },
    async create( req, res){
        try{
            const answer = await Answer.create(req.body)
            res.send(answer)
        } catch (e) {
            console.log(e)
            res.status(500).send({error:"Une erreur est survenue"})
        }
    },
    async update( req, res){
         try{
            await Answer.update(req.body, {
                where: {
                    id: req.params.AnswerId
                }
            })
            res.send(req.body)
         } catch (e){
            console.log(e)
            res.status(500).send({error:"Une erreur est survenue"})
         }
    }
}
