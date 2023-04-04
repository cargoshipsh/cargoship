import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const apis = [
  {
    id: "language-detection",
    name: "Language Detection",
    description: "Automatically detect the language of an input text.",
    endpointUrl: "https://language-detection.api.stackocean.com",
    cost: 1,
  },
];
async function main() {
  for (const api of apis) {
    await prisma.api.upsert({
      where: {
        id: api.id,
      },
      update: {
        ...api,
      },
      create: {
        ...api,
      },
    });
  }
  console.log("created or updated apis");
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
