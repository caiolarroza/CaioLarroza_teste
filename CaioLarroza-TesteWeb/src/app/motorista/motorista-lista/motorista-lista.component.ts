import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';

@Component({
  selector: 'app-motorista-lista',
  templateUrl: './motorista-lista.component.html',
  styleUrls: ['./motorista-lista.component.css']
})
export class MotoristaListaComponent implements OnInit {

  motorista: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
  	this.motorista = db.list('motorista')
  }

  ngOnInit() { }
 
  update(motorista){
  	console.log('Foi' + motorista);
  	if(motorista == 'Ativo'){
  		console.log('Ativo');

  	}else{
  		console.log('Inativo');
  	}
  }
}
