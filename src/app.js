const express = require('express');

const IndexRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(IndexRoutes);

module.exports = app;
