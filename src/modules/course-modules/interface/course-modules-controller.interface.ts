import { HttpResponse } from '../../courses/main/interfaces/http.interface';
import { CreateCourseModuleDto } from '../dtos/create-course-module-dto';
import { DeleteCourseModuleDto } from '../dtos/delete-course-module-dto';
import { GetCourseModuleDto } from '../dtos/get-course-module-dto';
import { UpdateCourseModuleDto } from '../dtos/update-course-module-dto';

export interface CourseModulesControllerInterface {
  createCourseModule(courseModuleDto: CreateCourseModuleDto): Promise<HttpResponse>;
  getCourseModule(courseModuleDto: GetCourseModuleDto): Promise<HttpResponse>;
  deleteCourse(courseModuleDto: DeleteCourseModuleDto): Promise<HttpResponse>;
  updateCourse(courseModuleDto: UpdateCourseModuleDto): Promise<HttpResponse>;
  listCourses(): Promise<HttpResponse>;
}
