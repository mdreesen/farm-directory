import type { FieldError } from 'react-hook-form';

export interface IGetFieldState {
  invalid: boolean;
  isDirty: boolean;
  isTouched: boolean;
  error?: FieldError | undefined;
}
