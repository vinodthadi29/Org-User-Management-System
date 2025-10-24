import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export class UsersController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public async createUser(req: Request, res: Response): Promise<void> {
        try {
            const user = await this.userService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    public async getUser(req: Request, res: Response): Promise<void> {
        try {
            const user = await this.userService.getUser(req.params.id);
            if (!user) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    public async updateUser(req: Request, res: Response): Promise<void> {
        try {
            const updatedUser = await this.userService.updateUser(req.params.id, req.body);
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    public async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            await this.userService.deleteUser(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    public async listUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await this.userService.listUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}