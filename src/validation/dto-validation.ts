import { DtoValidationInterface } from './interface/dto-validation.interface';
import { validate, ValidationError } from 'class-validator';

export class DtoValidation implements DtoValidationInterface {
  public async validate(dto: any): Promise<ValidationError[]> {
    const errors = await validate(dto);

    if (errors.length > 0) {
      const constraintsError = errors.map((error) => Object.values(error.constraints));
      return Array.prototype.concat.apply([], constraintsError);
    }

    return null;
  }
}
