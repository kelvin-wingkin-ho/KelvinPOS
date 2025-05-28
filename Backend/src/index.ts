import express from 'express';
import userRoutes from './routes/userRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Kelvin POS is running and listening to port: ${port}`)
})