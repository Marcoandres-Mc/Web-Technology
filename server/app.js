import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import productRoutes from './routes/product.routes.js';
import userRoutes from './routes/user.routes.js';
import sedeRoutes from './routes/sedes.routes.js'

import cors from 'cors';
dotenv.config();

const app = express();


app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Conectado');
})
app.use(cors({
    // origin: process.env.MAIN_PAGE.replace(/\/$/, ''), 
    //'http://localhost:5173'
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use('/api', productRoutes);
app.use('/api', userRoutes);
app.use('/api', sedeRoutes)




export default app;


