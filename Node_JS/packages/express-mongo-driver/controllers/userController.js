const { client } = require('../config/db');

async function getUsers(req, res) {


  const db = client.db("ecommerce");
  const users = await db.collection('users').find().toArray();
  
  res.json(users);



}

module.exports = { getUsers };