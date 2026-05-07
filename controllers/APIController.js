exports.photoGet = async (req, res) => {
    const prisma = require("../app");
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
    startTime = Date.now();
    res.json(startTime);
}

exports.timeGet = (req, res) => {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);    
    res.json(elapsedTime);
}

exports.timeComplete = (req, res) => {
    res.json(req.body.endTime)
}

exports.recordsGet = async (req, res) => {
    const prisma = require("../app");
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