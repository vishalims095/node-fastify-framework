const data = require('../data')

const getData = (rea, res) =>{
    res.send(data)
}
const getItem = (req, res) =>{
    const {id} = req.params
    const item = data.find((ele) => ele.id == id)
    res.send(item)
}
module.exports = {
    getData,
    getItem
}