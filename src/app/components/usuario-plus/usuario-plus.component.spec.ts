import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPlusComponent } from './usuario-plus.component';

describe('UsuarioPlusComponent', () => {
  let component: UsuarioPlusComponent;
  let fixture: ComponentFixture<UsuarioPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioPlusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
