import { PrismaClient } from '@prisma/client';
import type { users } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllUsers = async (): Promise<users[]> => {
    return prisma.users.findMany();
}