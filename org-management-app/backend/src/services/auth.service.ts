import { User } from '../models';
import { sign, verify } from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { AuthError } from '../errors';

export class AuthService {
    private jwtSecret: string;

    constructor() {
        this.jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';
    }

    async register(userData: { email: string; password: string }): Promise<User> {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = await User.create({ ...userData, password: hashedPassword });
        return user;
    }

    async login(email: string, password: string): Promise<string> {
        const user = await User.findOne({ where: { email } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new AuthError('Invalid email or password');
        }
        return this.generateToken(user.id);
    }

    private generateToken(userId: string): string {
        return sign({ id: userId }, this.jwtSecret, { expiresIn: '1h' });
    }

    async verifyToken(token: string): Promise<any> {
        try {
            return verify(token, this.jwtSecret);
        } catch (error) {
            throw new AuthError('Invalid token');
        }
    }
}