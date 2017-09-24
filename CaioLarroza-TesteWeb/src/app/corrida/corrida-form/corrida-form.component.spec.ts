import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorridaFormComponent } from './corrida-form.component';

describe('CorridaFormComponent', () => {
  let component: CorridaFormComponent;
  let fixture: ComponentFixture<CorridaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorridaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorridaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
