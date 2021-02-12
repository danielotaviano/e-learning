import { ValidationError } from 'class-validator';

export interface DtoValidationInterface {
  validate(courseDto: any): Promise<ValidationError[]>;
}
