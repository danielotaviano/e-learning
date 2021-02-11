import { getRepository } from 'typeorm';
import { Course } from '../modules/courses/entities/course.entity';
import { AbstractRepository } from './base/abstract';
import { InterfaceRepository } from './base/interface';

export class CourseRepository extends AbstractRepository<Course> implements InterfaceRepository<Course> {
  constructor() {
    const courseRepository = getRepository(Course);
    super(courseRepository);
  }
}
