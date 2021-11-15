const mongoose = require('mongoose')
let dotenv = require('dotenv').config();
const dbConection = require('./utils/dbConection');

dbConection().then(res => {
  console.log(res)
}).catch(error => {
  console.log(error)
  throw new Error(error.reason);
});