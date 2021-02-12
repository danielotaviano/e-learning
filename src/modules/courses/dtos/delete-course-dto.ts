import { IsNotEmpty, IsUUID } from 'class-validator';

export class DeleteCourseDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
