import { User } from '@pos/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllUsers = async (): Promise<User[]> => {
    const users  = await prisma.user.findMany();
    console.log(users);

    return [
        {id: 1, name: "Alice"},
        {id: 2, name: "Bob"}
    ]
}