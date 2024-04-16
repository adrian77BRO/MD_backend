import express from 'express';
import cors from 'cors';
import { userRouter } from './user/infrastructure/userRouter';
import { patientRouter } from './patient/infrastructure/patientRouter';
import { checkupRouter } from './checkup/infrastructure/checkupRouter';
import { authRouter } from './auth/infrastructure/authRouter';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use('/users', userRouter);
app.use('/patients', patientRouter);
app.use('/checkup', checkupRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});