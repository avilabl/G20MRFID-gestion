import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAnimalComponent } from './gestion-animal.component';

describe('GestionAnimalComponent', () => {
  let component: GestionAnimalComponent;
  let fixture: ComponentFixture<GestionAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
