import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoAnimalComponent } from './nuevo-animal.component';

describe('NuevoAnimalComponent', () => {
  let component: NuevoAnimalComponent;
  let fixture: ComponentFixture<NuevoAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
