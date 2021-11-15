const mongoose = require('mongoose')
let dotenv = require('dotenv').config();

let _db = null;

const dbConection =

  module.exports = async () => {

    const url = `${process.env.DB}://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_NAME}`
    console.log('Conectando DB')
    try {

      this._db = await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      return this._db;

    } catch (error) {
      return error
    }

  };