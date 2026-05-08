const { Router } = require("express");
const APIController = require("../controllers/APIController");
const APIRouter = Router();

APIRouter.post("/start", APIController.startTimer);
APIRouter.post("/complete", APIController.timeComplete);
APIRouter.get("/complete", APIController.endTimeGet);
APIRouter.get("/time", APIController.timeGet);
APIRouter.get("/:photoId/records", APIController.recordsGet);
APIRouter.get("/:photoId", APIController.photoGet);

module.exports = APIRouter;