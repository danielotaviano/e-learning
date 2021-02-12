import { DeleteResult, UpdateResult } from 'typeorm';
import { CourseModule } from '../../course-modules/entities/course-module.entity';
import { CreateCourseDto } from '../dtos/create-course-dto';
import { DeleteCourseDto } from '../dtos/delete-course-dto';
import { GetCourseDto } from '../dtos/get-course-dto';
import { GetCourseModulesDto } from '../dtos/get-course-modules-dto';
import { UpdateCourseDto } from '../dtos/update-course-dto';
import { Course } from '../entities/course.entity';

export interface CourseServiceInterface {
  createCourse(courseDto: CreateCourseDto): Promise<Course>;
  getCourse(courseDto: GetCourseDto): Promise<Course>;
  deleteCourse(courseDto: DeleteCourseDto): Promise<DeleteResult>;
  updateCourse(courseDto: UpdateCourseDto): Promise<UpdateResult>;
  listCourses(): Promise<Course[]>;
  listCourseModules(courseDto: GetCourseModulesDto): Promise<CourseModule[]>;
}
