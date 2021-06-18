const fastify = require('fastify')({logger : true})
port = 3000

fastify.get('/testApi', (req, res) => {
    res.send({test : "It's working"})
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