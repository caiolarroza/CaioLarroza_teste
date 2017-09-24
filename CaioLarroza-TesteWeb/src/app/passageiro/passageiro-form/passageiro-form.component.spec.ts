import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageiroFormComponent } from './passageiro-form.component';

describe('PassageiroFormComponent', () => {
  let component: PassageiroFormComponent;
  let fixture: ComponentFixture<PassageiroFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassageiroFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassageiroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
