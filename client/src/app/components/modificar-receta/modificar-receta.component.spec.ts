import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarRecetaComponent } from './modificar-receta.component';

describe('ModificarRecetaComponent', () => {
  let component: ModificarRecetaComponent;
  let fixture: ComponentFixture<ModificarRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarRecetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
