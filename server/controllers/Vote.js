const {Vote} = require('../models')

module.exports = {
    async list( req,res){
        try{
            const votes = await Vote.findAll()
            res.send(votes)
        } catch (e) {
            console.log(e)
            res.status(500).send({error:"Une erreur est survenue"})
        }
    },
    async create( req, res){
        try{
            const vote = await Vote.create(req.body)
            res.send(vote)
        } catch (e) {
            console.log(e)
            res.status(500).send({error:"Une erreur est survenue"})
        }
    },
    async delete( req, res){
        try{
            await Vote.delete({
                where: {
                    id: req.params.VoteId
                }
            })
            res.send({})
        } catch (e) {
            console.log(e)
            res.status(500).send({error:"Une erreur est survenue"})
        }
    },
    async update( req, res){
         try{
            await Vote.update(req.body, {
                where: {
                    id: req.params.VoteId
                }
            })
            res.send(req.body)
         } catch (e){
            console.log(e)
            res.status(500).send({error:"Une erreur est survenue"})
         }
    }
}
