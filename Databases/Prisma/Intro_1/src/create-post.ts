import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ['info', 'query'] }); // What this log in parameters does is whenever you execute this file in commands you'll see the sql queries that it ran under the hood. You can also keep in blank if you dont want the sql queries log.


async function main() {
    await prisma.post.create({
        data: {
            title: "Social Media",
            content: "Znew",
            author: {
                connect: {
                    id: 1
                }
            }
        }
    })
}

main()
    .then(async () => {
        console.log("Done with the Transaction")
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })