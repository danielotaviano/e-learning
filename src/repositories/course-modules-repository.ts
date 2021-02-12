import { getRepository, Repository } from 'typeorm';
import { CourseModule } from '../modules/course-modules/entities/course-module.entity';
import { CourseModulesRepositoryInterface } from '../modules/course-modules/interface/course-modules-repository.interface';
import { AbstractRepository } from './base/abstract';

export class CourseModulesRepository
  extends AbstractRepository<CourseModule>
  implements CourseModulesRepositoryInterface {
  private courseRepository: Repository<CourseModule>;

  constructor() {
    const courseRepository = getRepository(CourseModule);
    super(courseRepository);
    this.courseRepository = courseRepository;
  }

  public async findByCourseId(id: string): Promise<CourseModule[]> {
    return await this.courseRepository.find({ where: { courseId: id } });
  }
}
