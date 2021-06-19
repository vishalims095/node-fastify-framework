const data = require('../data')
const getDataOpts = {
    schema : {
        response : {
            200 : {
                type :  'array',
                items : {
                    type : 'object',
                    properties : {
                        id : {type : 'number'},
                        name : {type : 'string'}
                    }
                }
            }
        }
    }
}
function userRoute (fastify, options, done){
    fastify.get('/data', getDataOpts, (req, res) => {
        res.send( data)
    })

    fastify.get('/filterData/:id', (req, res) => {
        const {id} = req.params
        const item = data.find((ele) => ele.id == id)
        res.send(item)
    })
    done()
}
module.exports = userRoute