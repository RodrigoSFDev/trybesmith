import express from 'express';
import productRoutes from './routes/product';
import loginRoutes from './routes/login';

const app = express();

app.use(express.json());
app.use('/products', productRoutes);
app.use('/login', loginRoutes);

export default app;
