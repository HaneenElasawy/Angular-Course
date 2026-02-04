import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';

export const noSpaces: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value || '';
  return value.includes(' ') ? { noSpaces: true } : null;
};

export const strongPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value || '';

  const isValid =
    value.length >= 8 &&
    /[a-z]/.test(value) &&
    /[A-Z]/.test(value) &&
    /\d/.test(value) &&
    /[^A-Za-z0-9]/.test(value);

  return isValid ? null : { strongPassword: true };
};

export const matchPasswords = (
  passwordKey: string,
  confirmPasswordKey: string
): ValidatorFn => {
  return (group: AbstractControl): ValidationErrors | null => {
    const formGroup = group as FormGroup;
    const password = formGroup.get(passwordKey)?.value;
    const confirm = formGroup.get(confirmPasswordKey)?.value;

    if (!confirm) return null;
    return password === confirm ? null : { passwordMismatch: true };
  };
};
