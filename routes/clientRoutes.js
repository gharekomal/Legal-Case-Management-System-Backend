const express = require("express");
const router = express.Router();

const {
  addClient,
  getAllClients,
  getClientById
} = require("../Controllers/clientController");

const auth = require("../middleware/authMiddleware");

// CREATE CLIENT
router.post("/", auth, addClient);

// GET ALL CLIENTS
router.get("/", auth, getAllClients);

// GET SINGLE CLIENT
router.get("/:id", auth, getClientById);

module.exports = router;
