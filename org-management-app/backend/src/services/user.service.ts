import { User } from '../models'; // Assuming User model is defined in models/index.ts
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

export class UserService {
    async createUser(data: { username: string; password: string; email: string }) {
        const hashedPassword = await hash(data.password, 10);
        const user = await User.create({
            data: {
                username: data.username,
                password: hashedPassword,
                email: data.email,
            },
        });
        return user;
    }

    async findUserById(userId: string) {
        const user = await User.findUnique({
            where: { id: userId },
        });
        return user;
    }

    async findUserByEmail(email: string) {
        const user = await User.findUnique({
            where: { email: email },
        });
        return user;
    }

    async validateUserPassword(user: { password: string }, password: string) {
        return await compare(password, user.password);
    }

    async generateAuthToken(user: { id: string; username: string }) {
        const token = sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        return token;
    }

    async updateUser(userId: string, data: Partial<{ username: string; email: string }>) {
        const updatedUser = await User.update({
            where: { id: userId },
            data: data,
        });
        return updatedUser;
    }

    async deleteUser(userId: string) {
        await User.delete({
            where: { id: userId },
        });
    }
}