// https://github.com/100xDevs-hkirat/week-13-prisma
// Refer Above for more operations in prisma

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main() {
    const users = await prisma.user.findMany({});
    console.log(users);

    const user = await prisma.user.findUnique({
        where: {
            id: 1
        },
        include: {
            posts: false
        }
    });
    console.log(user);
}

main()
    .then(async () => {
        console.log("Done with the transaction")
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })