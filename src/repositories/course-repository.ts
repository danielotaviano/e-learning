import { getRepository } from 'typeorm';
import { Course } from '../modules/courses/entities/course.entity';
import { CourseRepositoryInterface } from '../modules/courses/interfaces/course-repository.interface';
import { AbstractRepository } from './base/abstract';

export class CourseRepository extends AbstractRepository<Course> implements CourseRepositoryInterface {
  constructor() {
    const courseRepository = getRepository(Course);
    super(courseRepository);
  }
}
