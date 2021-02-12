import { HttpResponse } from '../../../main/interfaces/http.interface';
import { CreateCourseModuleDto } from '../dtos/create-course-module-dto';
import { DeleteCourseModuleDto } from '../dtos/delete-course-module-dto';
import { GetCourseModuleDto } from '../dtos/get-course-module-dto';
import { UpdateCourseModuleDto } from '../dtos/update-course-module-dto';
import { CourseModulesServiceInterface } from '../interface/course-modules-service.interface';
import { CourseModulesControllerInterface } from '../interface/course-modules-controller.interface';
import { ok } from '../../../main/helpers/http-helper';

export class CourseModulesController implements CourseModulesControllerInterface {
  constructor(private readonly courseModulesService: CourseModulesServiceInterface) {}
  public async createCourseModule(courseModuleDto: CreateCourseModuleDto): Promise<HttpResponse> {
    return ok(await this.courseModulesService.createCourseModule(courseModuleDto));
  }

  public async getCourseModule(courseModuleDto: GetCourseModuleDto): Promise<HttpResponse> {
    return ok(await this.courseModulesService.getCourseModule(courseModuleDto));
  }

  public async deleteCourseModule(courseModuleDto: DeleteCourseModuleDto): Promise<HttpResponse> {
    return ok(await this.courseModulesService.deleteCourseModule(courseModuleDto), 204);
  }

  public async updateCourseModule(courseModuleDto: UpdateCourseModuleDto): Promise<HttpResponse> {
    return ok(await this.courseModulesService.updateCourseModule(courseModuleDto), 204);
  }
}
