const express = require('express');
const router = express.Router();
// const sgMail = require('@sendgrid/mail');
const HomePage = require('../models/homePage');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = function (app) {
    app.get('/', (req,res) => {
        res.render('index');
    });
}