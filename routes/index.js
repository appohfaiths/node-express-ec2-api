const express = require('express')
const router = express.Router()

const userRouter = require('./users/index')

router.get('/', (req, res) => {
    // res.status(200).json({
    //     message: 'hello from the server'
    // })
    // res.sendStatus(500) send default status message
    // res.download('index.js') allow user download file
    res.render('index', {text: 'World'}) //send html file
})

router.use('/users', userRouter)

module.exports = router