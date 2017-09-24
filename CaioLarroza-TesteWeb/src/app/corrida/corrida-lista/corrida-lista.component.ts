import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';

@Component({
  selector: 'app-corrida-lista',
  templateUrl: './corrida-lista.component.html',
  styleUrls: ['./corrida-lista.component.css']
})
export class CorridaListaComponent implements OnInit {

  corrida: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
  	this.corrida = db.list('corrida');	
  }

  ngOnInit() { }

}
