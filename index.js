const fastify = require('fastify')({logger : true})
const data = require('./data')
port = 3000

fastify.get('/testApi', (req, res) => {
    res.send({test : "It's working"})
})

fastify.get('/filterData/:id', (req, res) => {
    const {id} = req.params
    const item = data.find((ele) => ele.id == id)
    res.send(item)
})

const start = async() =>{
    try{
        await fastify.listen(port)
    } catch(error){
        fastify.log.error(error)
        process.exit(1)
    }
}
start()