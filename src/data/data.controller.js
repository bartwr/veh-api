const { HttpError } = require('mono-core')
const { getFindOptions } = require('mono-mongodb')

// const Data = require('./todos.service')

exports.listAllDataEntries = async (req, res) => {
	const data = ['test','test']

	res.json(data)
}

exports.getSingleDataEntry = async (req, res) => {
	const entryId = req.params.id
    const data = ['test' + entryId]

    res.json(data)
}
exports.listDeviceDataEntries = async (req, res) => {
	const deviceId = req.params.deviceId
    const data = ['test' + deviceId]

    res.json(data)
}
