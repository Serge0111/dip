import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.sass']
})
export class WrapperComponent implements OnInit {
  public form: FormGroup = this._fb.group({
      start: [''],
      end: [''],
      date: ['']
     });
  public startDate = new Date(1990, 0, 1);
     constructor(
      private _fb: FormBuilder
    ) { }

  ngOnInit() {

  }

}
