import { CreateCourseDto } from '../dtos/create-course-dto';
import { DeleteCourseDto } from '../dtos/delete-course-dto';
import { GetCourseDto } from '../dtos/get-course-dto';
import { UpdateCourseDto } from '../dtos/update-course-dto';
import { Course } from '../entities/course.entity';

export interface CourseControllerInterface {
  createCourse(courseDto: CreateCourseDto): Promise<Course>;
  getCourse(courseDto: GetCourseDto): Promise<Course>;
  deleteCourse(courseDto: DeleteCourseDto): Promise<void>;
  updateCourse(courseDto: UpdateCourseDto): Promise<void>;
}
