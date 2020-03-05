const {Question} = require('../models')

module.exports = {
    async list( req,res){
        try{
            const questions = await Question.findAll()
            res.send(questions)
        } catch (e) {
            console.log(e)
            res.status(500).send({error:"Une erreur est survenue"})
        }
    },
    async create( req, res){
        try{
            const question = await Question.create(req.body)
            res.send(question)
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
