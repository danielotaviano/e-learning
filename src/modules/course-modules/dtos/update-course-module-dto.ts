import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateCourseModuleDto {
  @IsNotEmpty()
  module_id: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
