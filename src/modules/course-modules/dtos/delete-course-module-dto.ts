import { IsString, IsUUID } from 'class-validator';

export class DeleteCourseModuleDto {
  @IsString()
  @IsUUID()
  module_id: string;
}
