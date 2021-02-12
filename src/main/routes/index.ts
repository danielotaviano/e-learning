import { Router } from 'express';
import coursesRouter from '../../modules/courses/main/routes/course.routes';

const router = Router();

router.use('/courses', coursesRouter);

export default router;
