import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-crossieldvalidation',
  templateUrl: './crossieldvalidation.component.html',
  styleUrls: ['./crossieldvalidation.component.scss'],
})
export class CrossieldvalidationComponent implements OnInit {
  form!: FormGroup;
  pwdNotMatch = 'pwdNotMatch';

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }
  get pwd(): FormGroup {
    return this.form.get('pwd') as FormGroup;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [
        '',
        [Validators.pattern('^[a-z0-9_-]{8,15}$'), Validators.required],
      ],
      pwd: this.fb.group(
        {
          password: ['', [this.minlen(15)]],
          confirm: [''],
        },
        {
          validators: [this.matchPwd],
        }
      ),
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

  private minlen(limitednum: number): ValidatorFn {
    return function (control: AbstractControl): ValidationErrors | null {
      if (control.value.length < limitednum) {
        return {
          minlen: true,
          requiredLength: limitednum,
        };
      }
      return null;
    };
  }

  private matchPwd = (group: FormGroup): ValidationErrors | null => {
    const pwdval = group.get('password')?.value;
    const cfmval = group.get('confirm')?.value;

    if (pwdval !== cfmval) {
      return { [this.pwdNotMatch]: true };
    }
    return null;
  };
}
interface ValidatorFn {
  (control: AbstractControl): ValidationErrors | null;
}
