const db = require('./connection');
const { User } = require('../models');
const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "../../.env") });

db.once('open', async () => {
  await User.deleteMany();

  // Create user
  const userData = {
    username: 'brayan',
    favorites: ['inception', 'inglorious barsterds', 'Watching paint dry (The Kings Speech)']
  };

  const user = await User.create(userData);
  await user.save();

  console.log('Database seeded successfully.');

  process.exit();
});
