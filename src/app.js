import express from 'express'
import bodyParse from "body-parser";
import cors from 'cors';
import userRoutes from './routes/user.routes.js';

const app = express();
app.use(bodyParse.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use('/users', userRoutes);




app.listen(4000, () => {
    console.log('server started on port 4000')
})