import { InterfaceRepository } from '../../../repositories/base/interface';
import { CourseModule } from '../entities/course-module.entity';

export interface CourseModulesRepositoryInterface extends InterfaceRepository<CourseModule> {
  findByCourseId(id: string): Promise<CourseModule[]>;
}
