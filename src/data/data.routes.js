// const dataValidation = require('./data.validation')
const dataController = require('./data.controller')

module.exports = [
    {
        method: 'GET',
        path: '/data',
        // validation: dataValidation.listAllDataEntries,
        handler: dataController.listAllDataEntries,
        doc: {
            name: 'Get all data entries',
            description: 'Get all data entries in the database'
        }
    },
    {
        method: 'GET',
        path: '/data/:id',
        // validation: dataValidation.getSingleDataEntry,
        handler: dataController.getSingleDataEntry,
        doc: {
            name: 'Get a single data entry',
            description: 'Get a single data entry'
        }
    },
    {
        method: 'GET',
        path: '/data/of/:publickey',
        // validation: dataValidation.listDeviceDataEntries,
        handler: dataController.listDeviceDataEntries,
        doc: {
            name: 'Get all data entries of a single device',
            description: 'Get all data entries of a single device'
        }
    }
]
