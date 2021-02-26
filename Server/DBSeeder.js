import dotenv from 'dotenv';
import fs from 'fs';
import ConnectDB from './config/db.js';
import Category from './models/CategoryModel.js';
import Item from './models/ItemModel.js';
import Order from './models/OrderModel.js';
import User from './models/UserModel.js';

// Load env vars
dotenv.config();

//Connect DB
ConnectDB();

//Read json files
const users = JSON.parse(fs.readFileSync(`./data/users.json`, 'utf-8'));

const categories = JSON.parse(
  fs.readFileSync(`./data/categories.json`, 'utf-8')
);

const orders = JSON.parse(fs.readFileSync(`./data/orders.json`, 'utf-8'));

const items = JSON.parse(fs.readFileSync(`./data/items.json`, 'utf-8'));

//Import into DB
const importData = async () => {
  try {
    await User.create(users);
    await Category.create(categories);
    await Order.create(orders);
    await Item.create(items);
    console.log('Data Imported Succesfully...');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

//Delete data
const deleteData = async () => {
  try {
    await User.deleteMany();
    await Category.deleteMany();
    await Order.deleteMany();
    await Item.deleteMany();
    console.log('Data was Destroyed...');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
