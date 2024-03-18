const express = require('express')
const router = express.Router()
const logger = require('../../middleware/logger')

router.get('/', (req, res) => {
    res.send(`user list for ${ req.query.name}`)
})

router.get('/new', (req, res) => {
    res.render("users/new")
})

router.post('/', (req, res) => {
    console.log((req.body.firstName))
    const isValid = true
    if (isValid) {
        users.push({ name: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("Error")
        res.render("users/new", {firstName: req.body.firstName})
    }
})

router.use(logger)

// put dynamic routes at the bottom
// you can use as many middleware as you want on one function
router.route('/:id')
    .get(logger, logger, (req, res) => {
    const {id} = req.params
    res.status(200).send({
        message: `user with ID ${id} found`,
        user: req.user
    })
    })
    .put((req, res) => {
    const {id} = req.params
    res.status(200).send({
        message: `user with ID ${id} updated`
    })
    })
    .delete((req, res) => {
    const {id} = req.params
    res.status(200).send({
        message: `user with ID ${id} deleted`
    })
    })

    const users = [{name: "Kyle"}, {name: "Sallie"}]
router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router