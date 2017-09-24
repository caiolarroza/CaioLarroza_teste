import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageiroListaComponent } from './passageiro-lista.component';

describe('PassageiroListaComponent', () => {
  let component: PassageiroListaComponent;
  let fixture: ComponentFixture<PassageiroListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassageiroListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassageiroListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
