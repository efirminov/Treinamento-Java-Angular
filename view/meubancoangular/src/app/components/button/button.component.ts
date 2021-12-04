import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input()
  titulo: string = '';


  constructor() {
    this.buttonClick = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  @Output() buttonClick: EventEmitter<any>;

  onClick(): any {
      this.buttonClick.emit(this.titulo + ` clicked`);
  }

}
