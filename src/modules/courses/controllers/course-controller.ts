import { CreateCourseDto } from '../dtos/create-course-dto';
import { DeleteCourseDto } from '../dtos/delete-course-dto';
import { GetCourseDto } from '../dtos/get-course-dto';
import { UpdateCourseDto } from '../dtos/update-course-dto';
import { Course } from '../entities/course.entity';
import { CourseControllerInterface } from '../interfaces/course-controller.interface';
import { CourseServiceInterface } from '../interfaces/course-service.interface';

export class CourseController implements CourseControllerInterface {
  constructor(private readonly courseService: CourseServiceInterface) {}
  public async createCourse(courseDto: CreateCourseDto): Promise<Course> {
    return await this.courseService.createCourse(courseDto);
  }

  public async getCourse(courseDto: GetCourseDto): Promise<Course> {
    return await this.courseService.getCourse(courseDto);
  }

  public async deleteCourse(courseDto: DeleteCourseDto): Promise<void> {
    await this.courseService.deleteCourse(courseDto);
  }

  public async updateCourse(courseDto: UpdateCourseDto): Promise<void> {
    await this.courseService.updateCourse(courseDto);
  }
}
