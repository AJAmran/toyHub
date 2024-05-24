import { client } from "../config/database.js";
import { ObjectId } from "mongodb";

const toyCollection = client.db("toysSet").collection("toys");

async function getAllToys() {
  return await toyCollection.find().toArray();
}

async function getToyById(id) {
  return await toyCollection.findOne({ _id: new ObjectId(id) });
}

async function searchToys(query) {
  return await toyCollection.find({ toyName: { $regex: query, $options: "i" } }).toArray();
}

async function getToysBySubCategory(subCategory) {
  return await toyCollection.find({ subCategory }).toArray();
}

async function getToysBySellerEmail(sellerEmail, sort) {
  let sortOption = {};
  if (sort === "asc") {
    sortOption.price = 1;
  } else if (sort === "desc") {
    sortOption.price = -1;
  }
  return await toyCollection.find({ sellerEmail }).sort(sortOption).toArray();
}

async function getLimitedToys(limit) {
  return await toyCollection.find().limit(limit).toArray();
}

async function addToy(toy) {
  return await toyCollection.insertOne(toy);
}

async function updateToy(id, updatedToy) {
  const filter = { _id: new ObjectId(id) };
  const options = { upsert: true };
  const updateDoc = { $set: updatedToy };
  return await toyCollection.updateOne(filter, updateDoc, options);
}

async function deleteToy(id) {
  const query = { _id: new ObjectId(id) };
  return await toyCollection.deleteOne(query);
}

export {
  getAllToys,
  getToyById,
  searchToys,
  getToysBySubCategory,
  getToysBySellerEmail,
  getLimitedToys,
  addToy,
  updateToy,
  deleteToy,
};
