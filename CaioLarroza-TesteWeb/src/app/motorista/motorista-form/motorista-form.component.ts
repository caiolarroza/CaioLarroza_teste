import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-motorista-form',
  templateUrl: './motorista-form.component.html',
  styleUrls: ['./motorista-form.component.css']
})
export class MotoristaFormComponent implements OnInit {

  motorista: Array<any>;

  constructor(private angularFire: AngularFireDatabase) { }

  ngOnInit() {
  	this.motorista = new Array<any>();
  }

  form_submit(f: NgForm){
  	this.angularFire.list("motorista").push(
  		{
  			nomeMoto: f.form.controls.nomeMoto.value,
  			datanascMoto: f.form.controls.datanascMoto.value,
  			cpfMoto: f.form.controls.cpfMoto.value,
  			carroMoto: f.form.controls.carroMoto.value,
  			statusMoto: f.form.controls.statusMoto.value,
  			sexoMoto: f.form.controls.sexoMoto.value
  		}
  	).then((t: any) => console.log('dados gravados: ' + t.key)),
  		(e: any) => console.log(e.message);

  	f.controls.nomeMoto.setValue('');
  	f.controls.datanascMoto.setValue('');
  	f.controls.cpfMoto.setValue('');
  	f.controls.carroMoto.setValue('');
  	f.controls.statusMoto.setValue('');
  	f.controls.sexoMoto.setValue('');
  	console.log(this.motorista);
}

}
