import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { ContatoService } from './contato.service';
import { ContatosComponent } from './contato/contato.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AngularFireModule.initializeApp(environment.firebase),
AngularFireDatabaseModule ],
  declarations: [ AppComponent, HelloComponent, ContatosComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ContatoService]
})
export class AppModule { }
