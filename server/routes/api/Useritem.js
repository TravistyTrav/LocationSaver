const { Router } = require('express')
const User = require('../../models/User')

const router = Router()

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const users = await User.find({ AuthID: id });
      if (!users.length) throw new Error('No User found with that ID');
      res.status(200).json(users[0]);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

router.post('/', async (req, res) => {
    const newUser = new User(req.body)
    try {
        const user = await newUser.save()
        if (!user) throw new Error('Something went wrong saving the User')
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router