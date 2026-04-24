const { prisma } = require("./lib/prisma.js");
async function main() {
  // Create a new user with a post
  const photo = await prisma.photo.create({
    data: {
      name: "easy",
      imageUrl: "imageURL"
    },
    include: {
      records: true,
      coordinates: true
    },
  });
  console.log("Created photo:", photo);
  // Fetch all photos with their records
  const allPhotos = await prisma.photo.findMany({
    include: {
      records: true,
    },
  });
  console.log("All photos:", JSON.stringify(allPhotos, null, 2));
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });