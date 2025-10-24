import { Request, Response } from 'express';
import { OrgService } from '../services/org.service';

export class OrgsController {
    private orgService: OrgService;

    constructor() {
        this.orgService = new OrgService();
    }

    public async createOrg(req: Request, res: Response): Promise<Response> {
        try {
            const orgData = req.body;
            const newOrg = await this.orgService.createOrg(orgData);
            return res.status(201).json(newOrg);
        } catch (error) {
            return res.status(500).json({ message: 'Error creating organization', error });
        }
    }

    public async getOrgs(req: Request, res: Response): Promise<Response> {
        try {
            const orgs = await this.orgService.getOrgs();
            return res.status(200).json(orgs);
        } catch (error) {
            return res.status(500).json({ message: 'Error retrieving organizations', error });
        }
    }

    public async getOrgById(req: Request, res: Response): Promise<Response> {
        try {
            const orgId = req.params.id;
            const org = await this.orgService.getOrgById(orgId);
            if (!org) {
                return res.status(404).json({ message: 'Organization not found' });
            }
            return res.status(200).json(org);
        } catch (error) {
            return res.status(500).json({ message: 'Error retrieving organization', error });
        }
    }

    public async updateOrg(req: Request, res: Response): Promise<Response> {
        try {
            const orgId = req.params.id;
            const orgData = req.body;
            const updatedOrg = await this.orgService.updateOrg(orgId, orgData);
            if (!updatedOrg) {
                return res.status(404).json({ message: 'Organization not found' });
            }
            return res.status(200).json(updatedOrg);
        } catch (error) {
            return res.status(500).json({ message: 'Error updating organization', error });
        }
    }

    public async deleteOrg(req: Request, res: Response): Promise<Response> {
        try {
            const orgId = req.params.id;
            const deleted = await this.orgService.deleteOrg(orgId);
            if (!deleted) {
                return res.status(404).json({ message: 'Organization not found' });
            }
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ message: 'Error deleting organization', error });
        }
    }
}