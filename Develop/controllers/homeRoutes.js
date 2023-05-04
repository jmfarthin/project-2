const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

// route to get all food trucks when the application is booted up
router.get('/', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
});

// route to get one specific food truck
router.get('/truck/:id', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
});

// A route to take signed in users to their profile page
router.get('/profile', withAuth, async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
});

// A route that will either direct the user to the login page, or to their profile page if they are already signed in
router.get('/login', (req, res) => {

});

