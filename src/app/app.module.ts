import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MailService } from './mail.service';


@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
