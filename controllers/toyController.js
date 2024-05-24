import * as toyModel from "../models/toyModel.js";

async function getAllToys(req, res, next) {
  try {
    const toys = await toyModel.getAllToys();
    res.status(200).json(toys);
  } catch (error) {
    next(error);
  }
}

async function getToyById(req, res, next) {
  try {
    const toy = await toyModel.getToyById(req.params.id);
    if (!toy) {
      return res.status(404).json({ message: "Toy not found" });
    }
    res.status(200).json(toy);
  } catch (error) {
    next(error);
  }
}

async function searchToys(req, res, next) {
  try {
    const toys = await toyModel.searchToys(req.params.text);
    res.status(200).json(toys);
  } catch (error) {
    next(error);
  }
}

async function getToysBySubCategory(req, res, next) {
  try {
    const toys = await toyModel.getToysBySubCategory(req.params.subCategory);
    res.status(200).json(toys);
  } catch (error) {
    next(error);
  }
}

async function getToysBySellerEmail(req, res, next) {
  try {
    const toys = await toyModel.getToysBySellerEmail(req.params.sellerEmail, req.query.sort);
    res.status(200).json(toys);
  } catch (error) {
    next(error);
  }
}

async function getLimitedToys(req, res, next) {
  try {
    const toys = await toyModel.getLimitedToys(20);
    res.status(200).json(toys);
  } catch (error) {
    next(error);
  }
}

async function addToy(req, res, next) {
  try {
    const result = await toyModel.addToy(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

async function updateToy(req, res, next) {
  try {
    const result = await toyModel.updateToy(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

async function deleteToy(req, res, next) {
  try {
    const result = await toyModel.deleteToy(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
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
