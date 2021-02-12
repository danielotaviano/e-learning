import { Router } from 'express';
import { CourseRepository } from '../../../../repositories/course-repository';
import { CourseController } from '../../controllers/course-controller';
import { CourseService } from '../../services/class-service';

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

// ListCourses
router.get('', async function (req, res) {
  const courses = await courseController.listCourses();
  return res.json(courses);
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
