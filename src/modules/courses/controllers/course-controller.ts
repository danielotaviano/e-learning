import { badRequest, ok } from '../../../main/helpers/http-helper';
import { DtoValidationInterface } from '../../../validation/interface/dto-validation.interface';
import { CreateCourseDto } from '../dtos/create-course-dto';
import { DeleteCourseDto } from '../dtos/delete-course-dto';
import { GetCourseDto } from '../dtos/get-course-dto';
import { GetCourseModulesDto } from '../dtos/get-course-modules-dto';
import { UpdateCourseDto } from '../dtos/update-course-dto';
import { CourseControllerInterface } from '../interfaces/course-controller.interface';
import { CourseServiceInterface } from '../interfaces/course-service.interface';
import { HttpResponse } from '../main/interfaces/http.interface';

export class CourseController implements CourseControllerInterface {
  constructor(
    private readonly courseService: CourseServiceInterface,
    private readonly courseDtoValidation: DtoValidationInterface,
  ) {}

  public async createCourse(courseDto: CreateCourseDto): Promise<HttpResponse> {
    const createCourse = Object.assign(new CreateCourseDto(), courseDto);
    const errors = await this.courseDtoValidation.validate(createCourse);
    if (errors) {
      return badRequest(errors);
    }

    return ok(await this.courseService.createCourse(courseDto), 201);
  }

  public async getCourse(courseDto: GetCourseDto): Promise<HttpResponse> {
    const getCourse = Object.assign(new GetCourseDto(), courseDto);
    const errors = await this.courseDtoValidation.validate(getCourse);
    if (errors) {
      return badRequest(errors);
    }

    return ok(await this.courseService.getCourse(courseDto));
  }

  public async getCourseModules(courseDto: GetCourseModulesDto): Promise<HttpResponse> {
    const getCourseModules = Object.assign(new GetCourseModulesDto(), courseDto);
    const errors = await this.courseDtoValidation.validate(getCourseModules);
    if (errors) {
      return badRequest(errors);
    }

    return ok(await this.courseService.listCourseModules(courseDto));
  }

  public async deleteCourse(courseDto: DeleteCourseDto): Promise<HttpResponse> {
    const deleteCourse = Object.assign(new DeleteCourseDto(), courseDto);
    const errors = await this.courseDtoValidation.validate(deleteCourse);
    if (errors) {
      return badRequest(errors);
    }

    return ok(await this.courseService.deleteCourse(courseDto), 204);
  }

  public async updateCourse(courseDto: UpdateCourseDto): Promise<HttpResponse> {
    const updateCourse = Object.assign(new UpdateCourseDto(), courseDto);
    const errors = await this.courseDtoValidation.validate(updateCourse);
    if (errors) {
      return badRequest(errors);
    }

    return ok(await this.courseService.updateCourse(courseDto), 204);
  }

  public async listCourses(): Promise<HttpResponse> {
    return ok(await this.courseService.listCourses());
  }
}
