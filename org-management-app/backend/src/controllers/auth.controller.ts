import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { validateLogin, validateRegister } from '../validators/auth.validator';

export class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    public async register(req: Request, res: Response): Promise<void> {
        const { error } = validateRegister(req.body);
        if (error) {
            res.status(400).json({ message: error.details[0].message });
            return;
        }

        try {
            const user = await this.authService.register(req.body);
            res.status(201).json(user);
        } catch (err) {
            res.status(500).json({ message: 'Registration failed', error: err.message });
        }
    }

    public async login(req: Request, res: Response): Promise<void> {
        const { error } = validateLogin(req.body);
        if (error) {
            res.status(400).json({ message: error.details[0].message });
            return;
        }

        try {
            const token = await this.authService.login(req.body);
            res.status(200).json({ token });
        } catch (err) {
            res.status(401).json({ message: 'Login failed', error: err.message });
        }
    }
}