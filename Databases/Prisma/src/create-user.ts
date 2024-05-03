import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            email: "harshad@gmail.com",
            name: "Harshad Khandare"
        }
    })
}

main()
    .then(async () => {
        console.log("Done with the query")
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })


/*
NOTE

1. npx prisma studio // to view your data
2. npx prisma migrate dev --name init // To Migrate your data 


*/ 