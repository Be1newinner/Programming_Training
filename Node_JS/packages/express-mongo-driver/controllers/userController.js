const { ecommerce_db } = require('../config/db');

async function getUsers(req, res) {

  const users = await ecommerce_db.collection('users').find().toArray();

  res.json(users);



}

module.exports = { getUsers };