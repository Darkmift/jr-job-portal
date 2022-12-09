import { Router } from 'express';

const router = Router();

router.get('/health', async (req, res) => {
    res.status(200).send({
        uptime: process.uptime(),
        message: 'Ok',
        date: new Date(),
        sqlConnection: null,
    });
});

// router.use('/auth', authRoutes);

export default router;
