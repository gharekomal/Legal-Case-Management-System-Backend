const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const clientRoutes = require("./routes/clientRoutes");
const lawyerRoutes = require("./routes/lawyerRoutes");
const caseRoutes = require("./routes/caseRoutes");
const hearingRoutes = require("./routes/hearingRoutes");
const documentRoutes = require("./routes/documentRoutes");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// routes
app.use("/api/auth", authRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/lawyer", lawyerRoutes);
app.use("/api/cases", caseRoutes);
app.use("/api/hearings", hearingRoutes);
app.use("/api/documents", documentRoutes);

module.exports = app;
