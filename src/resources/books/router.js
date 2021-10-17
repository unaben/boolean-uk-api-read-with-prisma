const express = require("express");

const {
  getAll,
  getOneBookById,
  getBooksByTypeFiction,
  getBooksByTypeNonFiction,
  getFictionBooksByTopic,
  getNonFictionBooksByTopic,
} = require("./controller");

const router = express.Router();

router.get("/", getAll);

router.get("/fiction/:topic", getFictionBooksByTopic);

router.get("/fiction", getBooksByTypeFiction);

router.get("/non-fiction", getNonFictionBooksByTopic);

router.get("/non-fiction/:topic", getBooksByTypeNonFiction);

router.get("/:id", getOneBookById);


module.exports = router;

