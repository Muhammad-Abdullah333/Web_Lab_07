const adminRoutes = require('express').Router();

adminRoutes.get('/', (req, res) => {
    res.send('Hello Meow Admin!');
});

module.exports = adminRoutes;
