import { Router } from 'express';
import authRoutes from './auth.routes';
import userRoutes from './user.routes';
import orgRoutes from './org.routes';

const router = Router();

const setRoutes = (app) => {
    app.use('/api/auth', authRoutes);
    app.use('/api/users', userRoutes);
    app.use('/api/orgs', orgRoutes);
};

export default setRoutes;