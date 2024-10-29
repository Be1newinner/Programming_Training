const express = require("express");
const { addLeadController } = require("../controllers/encController");

const Router = express.Router();

Router.post("add-lead", addLeadController);