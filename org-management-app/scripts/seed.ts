import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Seed organizations
    const org1 = await prisma.organization.create({
        data: {
            name: 'Organization One',
            description: 'This is the first organization.',
        },
    });

    const org2 = await prisma.organization.create({
        data: {
            name: 'Organization Two',
            description: 'This is the second organization.',
        },
    });

    // Seed users
    const user1 = await prisma.user.create({
        data: {
            username: 'user1',
            email: 'user1@example.com',
            password: 'password123',
            organizationId: org1.id,
        },
    });

    const user2 = await prisma.user.create({
        data: {
            username: 'user2',
            email: 'user2@example.com',
            password: 'password123',
            organizationId: org2.id,
        },
    });

    console.log({ org1, org2, user1, user2 });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });