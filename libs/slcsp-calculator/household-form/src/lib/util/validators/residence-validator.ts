import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ResidenceFormValue } from '@enroll/slcsp-calculator/types';

export function residenceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const residenceValue = control.value as ResidenceFormValue;

    const { county, absent } = residenceValue;

    let hasError = false;

    // County must have a value or absent must be true
    if (!county.zipcode && !absent) {
      hasError = true;
    }

    return hasError ? { missingFields: true } : null;
  };
}
