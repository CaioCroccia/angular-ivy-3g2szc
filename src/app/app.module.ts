import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { JurosCComponent } from './juros-c/juros-c.component';
import { JurosSComponent } from './juros-s/juros-s.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,],
  declarations: [ AppComponent, HelloComponent, JurosCComponent, JurosSComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
