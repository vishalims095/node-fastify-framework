const data = require('../data')
const {getData, getItem} = require('../controller/items')

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
    // handler : (req, res) => {
    //     res.send( data)
    // }
    handler : getData // call from controller
}
//for object

const getDataOptsObject = {
    schema : {
        response : {
            200 : Item
        }
    },
    // handler : function (req, res) {
    //     const {id} = req.params
    //     const item = data.find((ele) => ele.id == id)
    //     res.send(item)
    // }
    handler : getItem //call from controller
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