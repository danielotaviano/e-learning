import { Router } from 'express';
import coursesRouter from '../../modules/courses/main/routes/course.routes';
import courseModulesRouter from '../../modules/course-modules/main/routes/course-modules.routes';

const router = Router();

router.use('/courses', coursesRouter);
router.use('/courseModules', courseModulesRouter);

export default router;
