const prisma = require("../server/db/prisma");

async function main() {
  const id = "cmn4kb9hx0000ivvnn7jndmw1";

  await prisma.loan.update({
    where: { id },
    data: {
      dueDate: new Date("2026-02-22T10:04:14.350Z"),
    },
  });

  console.log("updated");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());