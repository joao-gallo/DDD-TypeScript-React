import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import userRoutes from '../infrastructure/routes/user.routes';
import { ErrorHandler } from '../infrastructure/middlewares/Error';

const app = express();
app.use(express.json());
app.use(cors());
// usando cors para conectar ao front end
app.use(helmet());
app.use(morgan('dev'));
// morgan é pra aparecer as requisições feitas no log do terminal
app.use('/api/auth', userRoutes);
app.use(ErrorHandler.execute)

export default app;