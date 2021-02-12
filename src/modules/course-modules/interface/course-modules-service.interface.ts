import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateCourseModuleDto } from '../dtos/create-course-module-dto';
import { DeleteCourseModuleDto } from '../dtos/delete-course-module-dto';
import { GetCourseModuleDto } from '../dtos/get-course-module-dto';
import { UpdateCourseModuleDto } from '../dtos/update-course-module-dto';
import { CourseModule } from '../entities/course-module.entity';

export interface CourseModulesServiceInterface {
  createCourseModule(courseModuleDto: CreateCourseModuleDto): Promise<CourseModule>;
  getCourseModule(courseModuleDto: GetCourseModuleDto): Promise<CourseModule>;
  deleteCourseModule(courseModuleDto: DeleteCourseModuleDto): Promise<DeleteResult>;
  updateCourseModule(courseModuleDto: UpdateCourseModuleDto): Promise<UpdateResult>;
}
