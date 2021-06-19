# Node-Fastify-Framework
## Installation
-npm i fastify --save

## Usage
const fastify = require('fastify')({logger : true})
port = 3000

// Declare a route
fastify.get('/', (request, res) => {
  res.send({ hello: 'Testing' })
})

// Run the server!

const start = async() =>{
    try{
        await fastify.listen(port)
    } catch(error){
        fastify.log.error(error)
        process.exit(1)
    }
}
start()