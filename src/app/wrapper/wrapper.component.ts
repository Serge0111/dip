import { Component, OnInit, Input, OnChanges, HostBinding } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ITrip } from '../interfaces/types';
import { TripService } from '../services/http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.sass']
})
export class WrapperComponent implements OnInit {
  @HostBinding('attr.class') misha = 'boria';
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
  public newVal: string;
  public transport: string;
  private start: string;
  private end: string;
  private date: string;
  private status: string;
  private putValue = '';
  private skuInput = 'mish';
  public heroes = [
    {
      name: 'vasia'
    },
    {
      name: 'boria'
    },
  ];
  constructor(
    private _fb: FormBuilder,
    private _http: TripService,
  ) {
  }
  set new(value: any) {
    this.newVal = value;
  }
  @Input('new')
  get new() {
    return this.newVal;
  }
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

  public onSubmit(value: any) {
    console.log(value, this.skuInput);
  }

  public sendFields() {
    try {
      if (!this.transport) {
        throw new Error('Please choose transport');
      }
      if (this.status !== 'VALID') {
        throw new Error('Invalid datas in forms');
      }

      const trip: ITrip = {
        start: this.start,
        end: this.end,
        transport: this.transport,
        date: (this.date as string)
      };
      console.log('TRIP', trip);
      const result: Observable<any> = this._http.editPersonalInfo(trip);
      result.subscribe((data) => console.log(`Data from back-end:`, data));


    } catch (e) {
      console.log(`${e}`);
    }
  }
  public handleVehicle(val) {
    this.transport = val;
    console.log(this.transport);
  }
}
