const express = require('express')

module.exports = function (server) {
    // URL base to all routes
    const router = express.Router()
    server.use('/api', router)

    // of Payments Routes of Cycle of Payments
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}