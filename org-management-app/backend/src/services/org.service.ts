import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class OrgService {
    async createOrg(data) {
        return await prisma.organization.create({
            data,
        });
    }

    async getOrgById(orgId) {
        return await prisma.organization.findUnique({
            where: { id: orgId },
        });
    }

    async updateOrg(orgId, data) {
        return await prisma.organization.update({
            where: { id: orgId },
            data,
        });
    }

    async deleteOrg(orgId) {
        return await prisma.organization.delete({
            where: { id: orgId },
        });
    }

    async getAllOrgs() {
        return await prisma.organization.findMany();
    }
}