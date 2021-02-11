import { Router } from 'express';
import { CourseController } from '../../modules/courses/controllers/course-controller';
import { CourseRepository } from '../../repositories/course-repository';
import { CourseService } from '../../modules/courses/services/class-service';

const router = Router();

const courseRepository = new CourseRepository();
const courseService = new CourseService(courseRepository);
const courseController = new CourseController(courseService);

// CreateCourse
router.post('/', async function (req, res) {
  const course = await courseController.createCourse(req.body);
  return res.json(course);
});

// GetCourse
router.get('/:id', async function (req, res) {
  const { id } = req.params;
  const course = await courseController.getCourse({ id });
  return res.json(course);
});

// DeleteCourse
router.delete('/:id', async function (req, res) {
  const { id } = req.params;

  await courseController.deleteCourse({ id });
  return res.end();
});

// UpdateCourse
router.put('/:id', async function (req, res) {
  await courseController.updateCourse({ ...req.params, ...req.body });
  return res.end();
});

export default router;
