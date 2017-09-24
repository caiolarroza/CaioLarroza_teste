import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorridaListaComponent } from './corrida-lista.component';

describe('CorridaListaComponent', () => {
  let component: CorridaListaComponent;
  let fixture: ComponentFixture<CorridaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorridaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorridaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
