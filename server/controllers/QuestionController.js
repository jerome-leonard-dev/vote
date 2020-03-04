const {Question} = require('../models')

module.exports = {
    async list( req,res){
        try{
            const Questions = await Question.findAll()
            res.send(Questions)
        } catch (e) {
            console.log(e)
            res.status(500).send({error:"Une erreur est survenue"})
        }
    },
    async create( req, res){
        try{
            const Question = await Question.create(req.body)
            res.send(Question)
        } catch (e) {
            console.log(e)
            res.status(500).send({error:"Une erreur est survenue"})
        }
    },
    async update( req, res){
         try{
            await Question.update(req.body, {
                where: {
                    id: req.params.QuestionId
                }
            })
            res.send(req.body)
         } catch (e){
            console.log(e)
            res.status(500).send({error:"Une erreur est survenue"})
         }
    }
}
