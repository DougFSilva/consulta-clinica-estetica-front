import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEspecialistaComponent } from './editar-especialista.component';

describe('EditarEspecialistaComponent', () => {
  let component: EditarEspecialistaComponent;
  let fixture: ComponentFixture<EditarEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEspecialistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
