import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCourseDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  @IsUUID()
  teacher_id?: string;
}
