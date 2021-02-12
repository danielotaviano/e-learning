import { DeleteResult, UpdateResult } from 'typeorm';
import { CourseModule } from '../../course-modules/entities/course-module.entity';
import { CourseModulesRepositoryInterface } from '../../course-modules/interface/course-modules-repository.interface';
import { CreateCourseDto } from '../dtos/create-course-dto';
import { DeleteCourseDto } from '../dtos/delete-course-dto';
import { GetCourseDto } from '../dtos/get-course-dto';
import { GetCourseModulesDto } from '../dtos/get-course-modules-dto';
import { UpdateCourseDto } from '../dtos/update-course-dto';
import { Course } from '../entities/course.entity';
import { CourseRepositoryInterface } from '../interfaces/course-repository.interface';
import { CourseServiceInterface } from '../interfaces/course-service.interface';

export class CourseService implements CourseServiceInterface {
  constructor(
    private readonly courseRepository: CourseRepositoryInterface,
    private readonly courseModulesRepository: CourseModulesRepositoryInterface,
  ) {}

  public async createCourse(courseDto: CreateCourseDto): Promise<Course> {
    return await this.courseRepository.create(courseDto);
  }

  public async getCourse(courseDto: GetCourseDto): Promise<Course> {
    return await this.courseRepository.findById(courseDto.id);
  }

  public async listCourseModules(courseDto: GetCourseModulesDto): Promise<CourseModule[]> {
    return await this.courseModulesRepository.findByCourseId(courseDto.course_id);
  }

  public async deleteCourse(courseDto: DeleteCourseDto): Promise<DeleteResult> {
    return await this.courseRepository.remove(courseDto.id);
  }

  public async updateCourse(courseDto: UpdateCourseDto): Promise<UpdateResult> {
    const { id, ...course } = courseDto;
    return await this.courseRepository.update(courseDto.id, course);
  }

  public async listCourses(): Promise<Course[]> {
    return await this.courseRepository.findAll();
  }
}
