import { PrismaClient } from '@prisma/client';
import { users } from './users';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: users,
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
