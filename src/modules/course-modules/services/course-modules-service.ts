import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateCourseModuleDto } from '../dtos/create-course-module-dto';
import { DeleteCourseModuleDto } from '../dtos/delete-course-module-dto';
import { GetCourseModuleDto } from '../dtos/get-course-module-dto';
import { UpdateCourseModuleDto } from '../dtos/update-course-module-dto';
import { CourseModule } from '../entities/course-module.entity';
import { CourseModulesRepositoryInterface } from '../interface/course-modules-repository.interface';
import { CourseModulesServiceInterface } from '../interface/course-modules-service.interface';

export class CourseModulesService implements CourseModulesServiceInterface {
  constructor(private readonly courseModulesRepository: CourseModulesRepositoryInterface) {}
  public async createCourseModule(courseModuleDto: CreateCourseModuleDto): Promise<CourseModule> {
    return await this.courseModulesRepository.create(courseModuleDto);
  }

  public async getCourseModule(courseModuleDto: GetCourseModuleDto): Promise<CourseModule> {
    return await this.courseModulesRepository.findById(courseModuleDto.module_id);
  }

  public async deleteCourseModule(courseModuleDto: DeleteCourseModuleDto): Promise<DeleteResult> {
    return await this.courseModulesRepository.remove(courseModuleDto.module_id);
  }

  public async updateCourseModule(courseModuleDto: UpdateCourseModuleDto): Promise<UpdateResult> {
    const { module_id, ...courseModule } = courseModuleDto;
    return await this.courseModulesRepository.update(module_id, courseModule);
  }
}
