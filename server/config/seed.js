const db = require('./connection');
const { User } = require('../models');
const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "../../.env") });

db.once('open', async () => {
  await User.deleteMany();

  // Create users
  const bryData = {
    username: 'bry6992',
    favorites: ['The Kings Speech', 'The Kings Speech', 'The Kings Speech']
  };

  const bry = await User.create(bryData);
  await bry.save();

  const demoData = {
    username: 'demo',
    favorites: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']
  };

  const user = await User.create(demoData);
  await user.save();

  console.log('Database seeded successfully.');

  process.exit();
});
