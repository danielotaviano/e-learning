import { Router } from 'express';
import { CourseModulesRepository } from '../../../../repositories/course-modules-repository';
import { CourseRepository } from '../../../../repositories/course-repository';
import { DtoValidation } from '../../../../validation/dto-validation';
import { CourseController } from '../../../courses/controllers/course-controller';
import { CourseService } from '../../../courses/services/course-service';

const router = Router();

const courseRepository = new CourseRepository();
const courseModulesRepository = new CourseModulesRepository();
const courseService = new CourseService(courseRepository, courseModulesRepository);
const courseValidation = new DtoValidation();
const courseController = new CourseController(courseService, courseValidation);

// CreateCourseModule
router.post('/', async function (req, res) {
  const httpResponse = await courseController.createCourse(req.body);
  console.log(httpResponse);
  return res.status(httpResponse.statusCode).json(httpResponse.body);
});

// GetCourse
router.get('/:id', async function (req, res) {
  const { id } = req.params;
  const httpResponse = await courseController.getCourse({ id });
  return res.status(httpResponse.statusCode).json(httpResponse.body);
});

// GetCourseModules
router.get('/:id/modules', async function (req, res) {
  const { id } = req.params;
  const httpResponse = await courseController.getCourseModules({ course_id: id });
  return res.status(httpResponse.statusCode).json(httpResponse.body);
});

// ListCourses
router.get('', async function (req, res) {
  const httpResponse = await courseController.listCourses();
  return res.status(httpResponse.statusCode).json(httpResponse.body);
});

// DeleteCourse
router.delete('/:id', async function (req, res) {
  const { id } = req.params;

  const httpResponse = await courseController.deleteCourse({ id });
  return res.status(httpResponse.statusCode).json(httpResponse.body);
});

// UpdateCourse
router.put('/:id', async function (req, res) {
  const httpResponse = await courseController.updateCourse({ ...req.params, ...req.body });
  return res.status(httpResponse.statusCode).json(httpResponse.body);
});

export default router;
