const data = require('../data')
//for array data
const getDataOpts = {
    schema : {
        response : {
            200 : {
                type :  'array',
                items : {
                    type : 'object',
                    properties : {
                        id : {type : 'string'},
                        name : {type : 'string'}
                    }
                }
            }
        }
    }
}
//for object

const getDataOptsObject = {
    schema : {
        response : {
            200 : {
                type :  'object',
                properties : {
                    // id : {type : 'string'},
                    name : {type : 'string'}
                }
            }
        }
    }
}
function userRoute (fastify, options, done){

    fastify.get('/data', getDataOpts, (req, res) => {
        res.send( data)
    })

    fastify.get('/filterData/:id', getDataOptsObject, (req, res) => {
        const {id} = req.params
        const item = data.find((ele) => ele.id == id)
        res.send(item)
    })
    done()
}
module.exports = userRoute