const Hearing = require("../models/Hearing");

const addHearing = async (req, res, next) => {
  try {
    const hearing = await Hearing.create(req.body);
    res.status(201).json(hearing);
  } catch (error) {
    next(error);
  }
};

const getHearings = async (req, res, next) => {
  try {
    const hearings = await Hearing.find().populate("case");
    res.json(hearings);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addHearing,
  getHearings
};
