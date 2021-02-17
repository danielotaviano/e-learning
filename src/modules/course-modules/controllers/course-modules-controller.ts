import { HttpResponse } from '../../../main/interfaces/http.interface';
import { CreateCourseModuleDto } from '../dtos/create-course-module-dto';
import { DeleteCourseModuleDto } from '../dtos/delete-course-module-dto';
import { GetCourseModuleDto } from '../dtos/get-course-module-dto';
import { UpdateCourseModuleDto } from '../dtos/update-course-module-dto';
import { CourseModulesServiceInterface } from '../interface/course-modules-service.interface';
import { CourseModulesControllerInterface } from '../interface/course-modules-controller.interface';
import { badRequest, ok } from '../../../main/helpers/http-helper';
import { DtoValidationInterface } from '../../../validation/interface/dto-validation.interface';

export class CourseModulesController implements CourseModulesControllerInterface {
  constructor(
    private readonly courseModulesService: CourseModulesServiceInterface,
    private readonly courseDtoValidation: DtoValidationInterface,
  ) {}

  public async createCourseModule(courseModuleDto: CreateCourseModuleDto): Promise<HttpResponse> {
    const createCourseModule = Object.assign(new CreateCourseModuleDto(), courseModuleDto);
    const errors = await this.courseDtoValidation.validate(createCourseModule);
    if (errors) {
      return badRequest(errors);
    }
    return ok(await this.courseModulesService.createCourseModule(courseModuleDto));
  }

  public async getCourseModule(courseModuleDto: GetCourseModuleDto): Promise<HttpResponse> {
    const getCourseModule = Object.assign(new GetCourseModuleDto(), courseModuleDto);
    const errors = await this.courseDtoValidation.validate(getCourseModule);
    if (errors) {
      return badRequest(errors);
    }
    return ok(await this.courseModulesService.getCourseModule(courseModuleDto));
  }

  public async deleteCourseModule(courseModuleDto: DeleteCourseModuleDto): Promise<HttpResponse> {
    const deleteCourseModule = Object.assign(new DeleteCourseModuleDto(), courseModuleDto);
    const errors = await this.courseDtoValidation.validate(deleteCourseModule);
    if (errors) {
      return badRequest(errors);
    }
    return ok(await this.courseModulesService.deleteCourseModule(courseModuleDto), 204);
  }

  public async updateCourseModule(courseModuleDto: UpdateCourseModuleDto): Promise<HttpResponse> {
    const updateCourseModule = Object.assign(new UpdateCourseModuleDto(), courseModuleDto);
    const errors = await this.courseDtoValidation.validate(updateCourseModule);
    if (errors) {
      return badRequest(errors);
    }
    return ok(await this.courseModulesService.updateCourseModule(courseModuleDto), 204);
  }
}
