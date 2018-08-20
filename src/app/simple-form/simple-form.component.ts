import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `<div>
  {{imess}}
    <input #val type="text" >
    <button (click)="onClick($event)">Click Me!</button>
  </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() imess;

  onClick(e) {
    console.log(e,'click')
  }

  constructor() { console.log(this,'cons')}

  ngOnInit() {
    console.log(this)
  }
}
