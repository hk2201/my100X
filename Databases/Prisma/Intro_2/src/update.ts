import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
    const res = await prisma.user.update({
        where: { username: username },
        data: {
            firstName, lastName
        }
    })

    console.log(res);

}

updateUser("harshad@gmail.com", {
    firstName: "HariOm",
    lastName: "OmHari"
});