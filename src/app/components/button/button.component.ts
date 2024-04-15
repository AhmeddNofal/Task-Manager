import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() color: string = "";
  @Input() text: string = "";

  // we create our own custom event
  @Output() btnClick = new EventEmitter();


  // this function is invocked when a click event listener is fired which is setup in the html file
  //the function emmits the cutom event we made as an output
  clicked() {
    this.btnClick.emit();
  } 
}
