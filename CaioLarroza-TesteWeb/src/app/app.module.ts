import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { PassageiroModule } from './passageiro/passageiro.module';
import { PassageiroComponent } from './passageiro/passageiro.component';
import { MotoristaComponent } from './motorista/motorista.component';
import { CorridaComponent } from './corrida/corrida.component';
import { PassageiroFormComponent } from './passageiro/passageiro-form/passageiro-form.component';
import { PassageiroListaComponent } from './passageiro/passageiro-lista/passageiro-lista.component';
import { MotoristaListaComponent } from './motorista/motorista-lista/motorista-lista.component';
import { MotoristaFormComponent } from './motorista/motorista-form/motorista-form.component';
import { CorridaFormComponent } from './corrida/corrida-form/corrida-form.component';
import { CorridaListaComponent } from './corrida/corrida-lista/corrida-lista.component';




export const firebaseConfig = {
    apiKey: "AIzaSyDjfXNeZ1HJ8d_lgw9o_6SYhvLahvJdwtU",
    authDomain: "caiolarroza-testeweb.firebaseapp.com",
    databaseURL: "https://caiolarroza-testeweb.firebaseio.com",
    projectId: "caiolarroza-testeweb",
    storageBucket: "",
    messagingSenderId: "98183748250"
};

@NgModule({
  declarations: [
    AppComponent,
    MotoristaListaComponent,
    MotoristaFormComponent,
    CorridaFormComponent,
    CorridaListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    PassageiroModule,
    RouterModule.forRoot([
      {
        path: 'passageiro',
        component: PassageiroFormComponent 
      },
      {
        path: 'motorista',
        component: MotoristaFormComponent 
      },  
      {
        path: 'corrida',
        component: CorridaFormComponent 
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
