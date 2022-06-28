const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: Number, required: true, min: 0}
})

const debtSchema = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: Number, min: 0, required: [true, 'Informe o valor do débito!']},
    status: {type: String, uppercase: true, enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
})

const billingCycleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    month: {type: Number, required: true, min: 1, max: 12},
    year: {type: Number, required: true, min: 1970, max: 2100},
    credits: [creditSchema],
    debts: [debtSchema],
})

module.exports = restful.model('billingCycle', billingCycleSchema)