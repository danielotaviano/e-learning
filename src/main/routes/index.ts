import { Router } from 'express';
import coursesRouter from '../../modules/courses/main/routes/class.routes';

const router = Router();

router.use('/courses', coursesRouter);

export default router;
