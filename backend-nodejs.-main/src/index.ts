import express, { Application } from 'express';
import cors from 'cors';
import loginRouter from './routes/login';
import productsRouter from './routes/products';
import cartRouter from './routes/cart';
import userRouter from './routes/users';
import ordersRouter from './routes/orders';
import dashboardRouter from './routes/dashboard';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use('/api/login', loginRouter);
app.use('/api/products', productsRouter);
app.use('/api/cart', cartRouter);
app.use('/api/user', userRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/dashboard', dashboardRouter);

const port: number = 3000;
app.listen(port, () => {
    console.log(`App is running on ${port} Port...`);
});
