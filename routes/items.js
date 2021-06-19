const data = require('../data')
function userRoute (fastify, options, done){
    fastify.get('/testApi', (req, res) => {
        res.send({test : "It's working"})
    })

    fastify.get('/filterData/:id', (req, res) => {
        const {id} = req.params
        const item = data.find((ele) => ele.id == id)
        res.send(item)
    })
    done()
}
module.exports = userRoute