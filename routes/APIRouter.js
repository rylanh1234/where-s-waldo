const { Router } = require("express");
const APIController = require("../controllers/APIController");
const APIRouter = Router();

APIRouter.get("/:photoId", APIController.photoGet);

module.exports = APIRouter;