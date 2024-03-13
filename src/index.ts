import express from 'express';
import { userRouter } from './user/infrastructure/userRouter';
import { authRouter } from './auth/infrastructure/authRouter';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/users', userRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});