import { IsNotEmpty, IsUUID } from 'class-validator';

export class GetCourseDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
