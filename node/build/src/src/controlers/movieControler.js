"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMovie = void 0;
const movies_js_1 = __importDefault(require("../../models/movies.js"));
async function CreateMovie(req, res) {
    try {
        const { title, description } = req.body;
        const newMovie = movies_js_1.default.create({
            title,
            description,
            enabled: true,
            createdAt: new Date(), updatedAt: new Date()
        }, { fields: ["title,description", "enabled", "createdAt", "updatedAt"] });
        if (newMovie) {
            return res.json({ message: "Movie created  successfully", data: newMovie });
        }
    }
    catch (error) {
        return res.status(503).json({ message: "Movie created failed" });
    }
}
exports.CreateMovie = CreateMovie;
;
