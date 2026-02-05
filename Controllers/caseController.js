const Case = require("../models/Case");

const createCase = async (req, res, next) => {
  try {
    const newCase = await Case.create({
      ...req.body,
      lawyer: req.user.id
    });
    res.status(201).json(newCase);
  } catch (error) {
    next(error);
  }
};

const getCases = async (req, res, next) => {
  try {
    const cases = await Case.find({ lawyer: req.user.id }).populate("client");
    res.json(cases);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCase,
  getCases
};
