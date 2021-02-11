import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateCourseDto } from '../dtos/create-course-dto';
import { DeleteCourseDto } from '../dtos/delete-course-dto';
import { GetCourseDto } from '../dtos/get-course-dto';
import { UpdateCourseDto } from '../dtos/update-course-dto';
import { Course } from '../entities/course.entity';

export interface CourseServiceInterface {
  createCourse(courseDto: CreateCourseDto): Promise<Course>;
  getCourse(courseDto: GetCourseDto): Promise<Course>;
  deleteCourse(courseDto: DeleteCourseDto): Promise<DeleteResult>;
  updateCourse(courseDto: UpdateCourseDto): Promise<UpdateResult>;
}
