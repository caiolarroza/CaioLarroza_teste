import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-corrida-form',
  templateUrl: './corrida-form.component.html',
  styleUrls: ['./corrida-form.component.css']
})
export class CorridaFormComponent implements OnInit {

    corrida: Array<any>;
    motorista: FirebaseListObservable<any[]>;
    passageiro: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFireDatabase) {
    this.motorista = angularFire.list('motorista');
    this.passageiro = angularFire.list('passageiro');
  }

  ngOnInit() {
  	this.corrida = new Array<any>();
  }

  form_submit(f: NgForm){
  	this.angularFire.list("corrida").push(
  		{
  			nomeMoto: f.form.controls.nomeMoto.value,
        nome: f.form.controls.nome.value,
  			preco: f.form.controls.preco.value
  		}
  	).then((t: any) => console.log('dados gravados: ' + t.key)),
  		(e: any) => console.log(e.message);

  	f.controls.nome.setValue('');
  	f.controls.nomeMoto.setValue('');
  	f.controls.preco.setValue('');
  	console.log(this.corrida);
}

}
