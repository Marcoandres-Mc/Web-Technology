import express from 'express';
import morgan from 'morgan';
import productRoutes from './routes/product.routes.js';
import cors from 'cors';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Conectado');
})
app.use(cors(
    {
        origin: ['http://127.0.0.1:5173', 'http://127.0.0.1:5175'],
        credentials: true
    }
))
app.use('/api', productRoutes);




export default app;


