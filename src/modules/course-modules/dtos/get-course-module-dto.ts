import { IsNotEmpty, IsUUID } from 'class-validator';

export class GetCourseModuleDto {
  @IsUUID()
  @IsNotEmpty()
  module_id: string;
}
