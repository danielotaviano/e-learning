import { Router } from 'express';
import { CourseModulesRepository } from '../../../../repositories/course-modules-repository';
import { DtoValidation } from '../../../../validation/dto-validation';
import { CourseModulesController } from '../../controllers/course-modules-controller';
import { CourseModulesService } from '../../services/course-modules-service';

const router = Router();

const courseModulesRepository = new CourseModulesRepository();
const courseService = new CourseModulesService(courseModulesRepository);
const courseValidation = new DtoValidation();
const courseModulesController = new CourseModulesController(courseService, courseValidation);

// CreateCourseModule
router.post('/', async function (req, res) {
  const httpResponse = await courseModulesController.createCourseModule(req.body);
  return res.status(httpResponse.statusCode).json(httpResponse.body);
});

// GetCourseModule
router.get('/:id', async function (req, res) {
  const { id } = req.params;
  const httpResponse = await courseModulesController.getCourseModule({ module_id: id });
  return res.status(httpResponse.statusCode).json(httpResponse.body);
});

// DeleteCourseModule
router.delete('/:id', async function (req, res) {
  const { id } = req.params;
  const httpResponse = await courseModulesController.deleteCourseModule({ module_id: id });
  return res.status(httpResponse.statusCode).json(httpResponse.body);
});

// UpdateCourseModule
router.put('/:id', async function (req, res) {
  const { id } = req.params;
  const httpResponse = await courseModulesController.updateCourseModule({ module_id: id, ...req.body });
  return res.status(httpResponse.statusCode).json(httpResponse.body);
});

export default router;
