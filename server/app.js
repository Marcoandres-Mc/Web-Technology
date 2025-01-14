import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import productRoutes from './routes/product.routes.js';
import userRoutes from './routes/user.routes.js';

import cors from 'cors';
dotenv.config();

const app = express();


app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Conectado');
})
app.use(cors({
    origin: 'http://localhost:5173', //process.env.MAIN_PAGE.replace(/\/$/, '')
    credentials: true
}));

app.use('/api', productRoutes);
app.use('/api', userRoutes);




export default app;


