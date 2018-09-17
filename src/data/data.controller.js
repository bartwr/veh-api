const {HttpError} = require('mono-core')
const {getFindOptions} = require('mono-mongodb')
const axios = require('axios');
const { conf } = require('mono-core')
const R = require('ramda');

const VehBigchainDriver = require('./driver.js');
const vehDriver = new VehBigchainDriver({
    network: 'http://188.166.15.225:9984/api/v1/'
});

exports.listAllDataEntries = async (req, res) => {
    let allAssets = await vehDriver.getAssets();
    res.json(allAssets);
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
