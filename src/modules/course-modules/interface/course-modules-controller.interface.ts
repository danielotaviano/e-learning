import { HttpResponse } from '../../../main/interfaces/http.interface';
import { CreateCourseModuleDto } from '../dtos/create-course-module-dto';
import { DeleteCourseModuleDto } from '../dtos/delete-course-module-dto';
import { GetCourseModuleDto } from '../dtos/get-course-module-dto';
import { UpdateCourseModuleDto } from '../dtos/update-course-module-dto';

export interface CourseModulesControllerInterface {
  createCourseModule(courseModuleDto: CreateCourseModuleDto): Promise<HttpResponse>;
  getCourseModule(courseModuleDto: GetCourseModuleDto): Promise<HttpResponse>;
  deleteCourseModule(courseModuleDto: DeleteCourseModuleDto): Promise<HttpResponse>;
  updateCourseModule(courseModuleDto: UpdateCourseModuleDto): Promise<HttpResponse>;
}
