import express from 'express';
import { json } from 'body-parser';
import { setRoutes } from './routes/index';
import { errorMiddleware } from './middlewares/error.middleware';
import { logger } from './utils/logger';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use(logger);

setRoutes(app);

app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});