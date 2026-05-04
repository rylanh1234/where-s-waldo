const { Router } = require("express");
const APIController = require("../controllers/APIController");
const APIRouter = Router();

APIRouter.post("/start", APIController.startTimer);
APIRouter.get("/time", APIController.timeGet);
APIRouter.get("/:photoId", APIController.photoGet);

module.exports = APIRouter;