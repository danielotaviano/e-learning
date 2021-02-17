import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateCourseModuleDto {
  @IsNotEmpty()
  @IsUUID()
  courseId: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
