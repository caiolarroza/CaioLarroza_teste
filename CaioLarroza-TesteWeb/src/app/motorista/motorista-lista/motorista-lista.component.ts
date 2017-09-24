import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';

@Component({
  selector: 'app-motorista-lista',
  templateUrl: './motorista-lista.component.html',
  styleUrls: ['./motorista-lista.component.css']
})
export class MotoristaListaComponent implements OnInit {

  motorista: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase) {  	
  }

  ngOnInit() {
  	this.motorista = this.db.list('motorista')	
  }
 
  update(motorista){
  	console.log('Foi' + motorista);
  	if(motorista.statusMoto == 'Ativo'){
  		console.log('Ativo');
  		console.log(motorista);
  		console.log(motorista.$key);
  		this.db.object('/motorista/'+motorista.$key).update({statusMoto: 'Inativo'});
  		console.log(motorista);
  	}else{
  		this.db.object('/motorista/'+motorista.$key).update({statusMoto: 'Ativo'});
  	}
  }
}
