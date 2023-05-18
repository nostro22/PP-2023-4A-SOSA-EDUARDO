import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltasProductoFormularioComponent } from './altas-producto-formulario.component';

describe('AltasProductoFormularioComponent', () => {
  let component: AltasProductoFormularioComponent;
  let fixture: ComponentFixture<AltasProductoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltasProductoFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltasProductoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
