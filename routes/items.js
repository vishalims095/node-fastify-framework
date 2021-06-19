const data = require('../data')
const {getData, getItem} = '../controller/items'

//item schema

const Item =  {
    type : 'object',
    properties : {
        id : {type : 'string'},
        name : {type : 'string'}
    }
}

//for array data
const getDataOpts = {
    schema : {
        response : {
            200 : {
                type :  'array',
                items : Item
            }
        }
    },
    handler : (req, res) => {
        res.send( data)
    }
}
//for object

const getDataOptsObject = {
    schema : {
        response : {
            200 : Item
        }
    },
    handler : function (req, res) {
        const {id} = req.params
        const item = data.find((ele) => ele.id == id)
        res.send(item)
    }
}
function userRoute (fastify, options, done){

    // fastify.get('/data', getDataOpts, (req, res) => {
    //     res.send( data)
    // })

    // fastify.get('/filterData/:id', getDataOptsObject, (req, res) => {
    //     const {id} = req.params
    //     const item = data.find((ele) => ele.id == id)
    //     res.send(item)
    // })
    //minimize code add handler in schema
    
    fastify.get('/data', getDataOpts)

    fastify.get('/filterData/:id', getDataOptsObject )

    done()
}
module.exports = userRoute