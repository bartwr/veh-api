const {HttpError} = require('mono-core')
const {getFindOptions} = require('mono-mongodb')
const axios = require('axios');
const { conf } = require('mono-core')



exports.listAllDataEntries = async (req, res) => {
    const data = ['test', 'test']

    res.json(data)
}

exports.getSingleDataEntry = async (req, res) => {
    const entryId = req.params.id
    const bigchaindb = conf.mono.bigchaindb
    const data = axios.get(bigchaindb.url + bigchaindb.assets + entryId)
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            res.json(error.message)
        })
}
exports.listDeviceDataEntries = async (req, res) => {
    const publickey = req.params.publickey
    const bigchaindb = conf.mono.bigchaindb
    const data = axios.get(bigchaindb.url + bigchaindb.outputs + publickey)
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            res.json(error.message)
        })
}
