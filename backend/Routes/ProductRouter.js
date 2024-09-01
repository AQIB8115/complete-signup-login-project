const router = require('express').Router();

const ensureAuthenticated = require('../Middlewares/Auth')

router.get('/', ensureAuthenticated, (req, res) => {
    console.log('---- logged in user detail ----', req.user);
    res.status(200).json([
        {
            name: "mobile",
            price: 50000
        },
        {
            name: "Tv",
            price: 30000
        }
    ])
});

module.exports = router;