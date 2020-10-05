"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movieControler_1 = require("../controlers/movieControler");
const router = express_1.Router();
router.post("/new-movie", movieControler_1.CreateMovie);
exports.default = router;
