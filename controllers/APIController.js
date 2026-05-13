exports.photoGet = async (req, res) => {
    const { prisma } = require("../app");
    const { photoId } = req.params;
    const photo = await prisma.photo.findUnique({
        where: { id: Number(photoId) },
        include: {
            records: true,
            coordinates: true
        }
    });
    res.json(photo);
}

exports.startTimer = (req, res) => {
    const { globalTime } = require("../app");
    globalTime.startTime = Date.now();
    res.json(globalTime);
}

exports.timeGet = (req, res) => {
    const { globalTime } = require("../app");
    const elapsedTime = Math.floor((Date.now() - globalTime.startTime) / 1000);    
    res.json(elapsedTime);
}

exports.timeComplete = (req, res) => {
    const { globalTime } = require("../app");
    globalTime.endTime = req.body.endTime;
    res.json(globalTime);
}

exports.endTimeGet = (req, res) => {
    const { globalTime } = require("../app");
    res.json(globalTime);
}

exports.recordsGet = async (req, res) => {
    const { prisma } = require("../app");
    const { photoId } = req.params;
    const records = await prisma.record.findMany({
        where: { photoId: Number(photoId) },
        orderBy: { time: {
            sort: "asc",
            nulls: "last"
        } }
    })
    res.json(records);
}

exports.createRecord = async (req, res) => {
    const { prisma } = require("../app");
    const { photoId } = req.params;
    const record = await prisma.photo.update({
        where: { id: Number(photoId) },
        data: {
            records: {
                create: [{
                    holder: req.body.holderName ? req.body.holderName : "Anonymous",
                    time: req.body.time
                }]
            }
        }
    })
    res.json(record);
}