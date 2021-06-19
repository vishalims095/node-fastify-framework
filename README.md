# Node-Fastify-Framework
## Installation
- ![#f03c15] npm i fastify --save  `#f03c15`
- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `#f03c15`

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