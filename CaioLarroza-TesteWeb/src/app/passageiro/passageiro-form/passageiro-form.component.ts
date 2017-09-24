import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-passageiro-form',
  templateUrl: './passageiro-form.component.html',
  styleUrls: ['./passageiro-form.component.css']
})
export class PassageiroFormComponent implements OnInit {

  passageiro: Array<any>;

  constructor(private angularFire: AngularFireDatabase) { }

  ngOnInit() {
  	this.passageiro = new Array<any>();
  }

  form_submit(f: NgForm){
  	this.angularFire.list("passageiro").push(
  		{
  			nome: f.form.controls.nome.value,
  			cpf: f.form.controls.cpf.value,
  			datanasc: f.form.controls.datanasc.value,
  			sexo: f.form.controls.sexo.value
  		}
  	).then((t: any) => console.log('dados gravados: ' + t.key)),
  		(e: any) => console.log(e.message);

  	f.controls.nome.setValue('');
  	f.controls.cpf.setValue('');
  	f.controls.datanasc.setValue('');
  	f.controls.sexo.setValue('');
  	console.log(this.passageiro);
}
  	
}
