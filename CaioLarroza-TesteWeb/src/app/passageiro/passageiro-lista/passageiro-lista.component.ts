import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';

@Component({
  selector: 'app-passageiro-lista',
  templateUrl: './passageiro-lista.component.html',
  styleUrls: ['./passageiro-lista.component.css']
})
export class PassageiroListaComponent implements OnInit {

  passageiro: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
  	this.passageiro = db.list('passageiro');	
  }

  ngOnInit() {  }

}
