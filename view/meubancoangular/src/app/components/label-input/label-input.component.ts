import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-input',
  templateUrl: './label-input.component.html',
  styleUrls: ['./label-input.component.css']
})
export class LabelInputComponent implements OnInit {


  @Input()
  label: string = '';

  @Input()
  type = 'text' || 'email' || 'password';


  constructor() { }

  ngOnInit(): void {
  }

  onChange: any = () => {}
  onTouch: any = () => {}
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  input: string = '';
  writeValue(input: string) {
    this.input = input;
  }

}
