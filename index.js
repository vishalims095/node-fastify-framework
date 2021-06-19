const fastify = require('fastify')({logger : true})
port = 3000
fastify.register(require('fastify-swagger'), {
    exposeRoute : true, 
    routePrefix : '/doc',
    swagger:{
        info : {
            title : 'fastify-api'
        }
    }
})
//just run 'http://localhost:3000/doc/' on browser
fastify.register(require('./routes/items'))
// fastify.get('/testApi', (req, res) => {
//     res.send({test : "It's working"})
// })

// fastify.get('/filterData/:id', (req, res) => {
//     const {id} = req.params
//     const item = data.find((ele) => ele.id == id)
//     res.send(item)
// })
const start = async() =>{
    try{
        await fastify.listen(port)
    } catch(error){
        fastify.log.error(error)
        process.exit(1)
    }
}
start()