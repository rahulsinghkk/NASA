const express = require('express')

const launchesRouter = require("./launches/launches.router");
const plantesRouter = require("./planets/planets.router");

const api = express.Router();

api.use('/planets',plantesRouter);
api.use('/launches',launchesRouter);

module.exports = api