const Client = require("../models/Client");

// ADD CLIENT
exports.addClient = async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET ALL CLIENTS
exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).send({message:"Cilents fetch sucessfully" , clients})
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET CLIENT BY ID
exports.getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }
    res.json(client);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
