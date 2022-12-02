import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEspecialistaComponent } from './criar-especialista.component';

describe('CriarEspecialistaComponent', () => {
  let component: CriarEspecialistaComponent;
  let fixture: ComponentFixture<CriarEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarEspecialistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
