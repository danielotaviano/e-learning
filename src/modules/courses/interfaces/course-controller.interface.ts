import { CreateCourseDto } from '../dtos/create-course-dto';
import { DeleteCourseDto } from '../dtos/delete-course-dto';
import { GetCourseDto } from '../dtos/get-course-dto';
import { UpdateCourseDto } from '../dtos/update-course-dto';
import { HttpResponse } from '../main/interfaces/http.interface';

export interface CourseControllerInterface {
  createCourse(courseDto: CreateCourseDto): Promise<HttpResponse>;
  getCourse(courseDto: GetCourseDto): Promise<HttpResponse>;
  deleteCourse(courseDto: DeleteCourseDto): Promise<HttpResponse>;
  updateCourse(courseDto: UpdateCourseDto): Promise<HttpResponse>;
  listCourses(): Promise<HttpResponse>;
}
