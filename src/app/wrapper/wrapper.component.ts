import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.sass']
})
export class WrapperComponent implements OnInit {
  public form: FormGroup = this._fb.group({
    start: ['', [
      Validators.required,
      Validators.minLength(4),
      this.forbiddenNameValidator(/[^а-я]{4,}/) // <-- Here's how you pass in the custom validator.
    ]],
    end: ['', [
      Validators.required,
      Validators.minLength(4),
      this.forbiddenNameValidator(/[^а-я]{4,}/) // <-- Here's how you pass in the custom validator.
    ]],
    date: ['', [Validators.required, Validators.minLength(4)]]
  });

  public startvld = this.form.controls.start;
  public endvld = this.form.controls.end;
  public startDate: Date = new Date(1990, 0, 1);
  public transport: string;
  private start: string;
  private end: string;
  private date: string;
  private status: string;
  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form.valueChanges.subscribe((data) => {
      const { start, end, date } = data;
      this.start = start;
      this.end = end;
      this.date = date;
      this.status = this.form.status;
    });
  }

  public forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
  }

  public sendData(val) {
    if (!this.transport) {
      console.log('Choose transport type');
    } else {
      console.log(this.transport, this.status);
    }
  }
  public handle(val) {
    this.transport = val;
    console.log(this.transport);
  }
}
