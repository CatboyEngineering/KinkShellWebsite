import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroup, FormGroupDirective, NgForm, UntypedFormGroup } from '@angular/forms';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'ui-form-field-error [form][errorFor]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-form-field-error.component.html',
  styleUrl: './ui-form-field-error.component.css'
})
export class UiFormFieldErrorComponent implements OnInit {
  @Input() errorFor: string | undefined;
  @Input() form: FormGroupDirective | undefined;

  errorMessages$: Observable<string[]> | undefined;
  control: AbstractControl | undefined;

  constructor() {}

  ngOnInit(): void {
    let parentForm = this.form;
    this.control = parentForm?.control.controls[this.errorFor!];
    this.errorMessages$ = this.form?.ngSubmit.pipe(map(() => this.mapErrorMessage()));
  }

  private mapErrorMessage(): string[] {
    var errors = [];

    if (this.control?.hasError('required')) {
      errors.push('This field is required');
    }

    if (this.control?.hasError('email')) {
      errors.push('Please enter a valid email address');
    }

    if (this.control?.hasError('passwordStrength')) {
      errors.push('Passwords must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character');
    }

    if (this.control?.hasError('confirmPassword')) {
      errors.push('Passwords do not match');
    }

    if (this.control?.hasError('minlength')) {
      if (this.errorFor === 'username') {
        errors.push('Username must be at least 6 characters long');
      } else if (this.errorFor === 'password') {
        errors.push('Passwords must be at least 8 characters long');
      }
    }

    return errors;
  }
}
