import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorAltaComponent } from './contenedor-alta.component';

describe('ContenedorAltaComponent', () => {
  let component: ContenedorAltaComponent;
  let fixture: ComponentFixture<ContenedorAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorAltaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
