let data = require('../data')
const {v4 : uuidv4} = require('uuid')
const getData = (rea, res) =>{
    res.send(data)
}
const getItem = (req, res) =>{
    const {id} = req.params
    const item = data.find((ele) => ele.id == id)
    res.send(item)
}
const postData = (req, res) =>{
    const {name} = req.body
    let item =  {id  : uuidv4(), name : name}
    data = [...data, item]
    res.code(201).send(item)
}
module.exports = {
    getData,
    getItem,
    postData
}