const User = require("../models/User");
const Case = require("../models/Case");

/**
 * GET LOGGED-IN LAWYER PROFILE
 */
const getLawyerProfile = async (req, res) => {
  try {
    if (req.user.role !== "LAWYER") {
      return res.status(403).json({ message: "Access denied" });
    }

    const lawyer = await User.findById(req.user.id).select("-password");

    if (!lawyer) {
      return res.status(404).json({ message: "Lawyer not found" });
    }

    res.json(lawyer);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch lawyer profile" });
  }
};

/**
 * GET LAWYER'S CASES
 */
const getMyCases = async (req, res) => {
  try {
    if (req.user.role !== "LAWYER") {
      return res.status(403).json({ message: "Access denied" });
    }

    const cases = await Case.find({ lawyer: req.user.id })
      .populate("client", "name email")
      .sort({ createdAt: -1 });

    res.json(cases);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch cases" });
  }
};

/**
 * GET LAWYER'S CLIENTS (FROM CASES)
 */
const getMyClients = async (req, res) => {
  try {
    if (req.user.role !== "LAWYER") {
      return res.status(403).json({ message: "Access denied" });
    }

    const cases = await Case.find({ lawyer: req.user.id }).populate(
      "client",
      "name email"
    );

    // extract unique clients
    const clientsMap = {};
    cases.forEach(c => {
      if (c.client) {
        clientsMap[c.client._id] = c.client;
      }
    });

    const clients = Object.values(clientsMap);

    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch clients" });
  }
};

module.exports = {
  getLawyerProfile,
  getMyCases,
  getMyClients
};
