import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassageiroComponent } from '../passageiro/passageiro.component';
import { MotoristaComponent } from '../motorista/motorista.component';
import { CorridaComponent } from '../corrida/corrida.component';
import { PassageiroFormComponent } from '../passageiro/passageiro-form/passageiro-form.component';
import { PassageiroListaComponent } from '../passageiro/passageiro-lista/passageiro-lista.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
	declarations:[
		PassageiroComponent,
		MotoristaComponent,
		CorridaComponent,
		PassageiroFormComponent,
		PassageiroListaComponent
	],
	imports:[
		CommonModule,
		FormsModule
	],
	exports:[
		PassageiroComponent,
		MotoristaComponent,
		CorridaComponent,
		PassageiroFormComponent,
		PassageiroListaComponent
	],
	providers:[
		AngularFireDatabaseModule
	]
})

export class PassageiroModule{}