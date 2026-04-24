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