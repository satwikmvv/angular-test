import { Component } from '@angular/core';
import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  template: `<div>

    <app-simple-form *ngFor="let i of mail.message" [imess]="i">

    </app-simple-form>

  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor(private mail:MailService){ console.log(this)}
}
