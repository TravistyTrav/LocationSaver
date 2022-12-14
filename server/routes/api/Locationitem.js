const { Router } = require('express')
const Location = require('../../models/Location')

const router = Router()

router
.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const locationItem = await Location.findById(id)
        if (!locationItem) throw new Error('No Location Item found')
        res.status(200).json(locationItem)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router