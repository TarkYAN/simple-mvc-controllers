const path = require('path');

// pull in our models. This will automatically load the index.js from that folder
const models = require('../models');

// There is no reason for the name here except an arbitary example
// of updating the server data based on a client request.
let name = 'unknown';

const hostIndex = (req, res) => {
  return res.sendFile(path.resolve(`${__dirname}/../../views/index.html`));
};

const hostPage1 = (req, res) => {
  return res.sendFile(path.resolve(`${__dirname}/../../views/page1.html`));
};

const hostPage2 = (req, res) => {
  return res.sendFile(path.resolve(`${__dirname}/../../views/page2.html`));
};

const getName = (req, res) => {
  return res.json({name});
};

const setName = (req, res) => {
  if (!req.body.firstname || !req.body.lastname || !req.body.beds) {
    return res.status(400).json({ error: 'firstname, lastname and beds are all required' });
  }
  
};
const searchName = (req, res) => {
  if (!req.query.name) {
    return res.status(400).json({ error: 'Name is required to perform a search' });
  }
};

const notFound = (req, res) => {
  return res.status(404).sendFile(path.resolve(`${__dirname}/../../views/notFound.html`));

};


module.exports = {
  index: hostIndex,
  page1: hostPage1,
  page2: hostPage2,
  getName,
  setName,
  searchName,
  notFound,
};