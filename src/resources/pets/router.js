const express = require("express");
const router = require("../books/router");

const { getAll, getOnePetById } = require("./controller");

router.get("/", getAll);

router.get("/:id", getOnePetById);

module.exports = router;