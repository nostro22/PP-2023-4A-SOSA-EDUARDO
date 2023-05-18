import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaPedidoComponent } from './modifica-pedido.component';

describe('ModificaPedidoComponent', () => {
  let component: ModificaPedidoComponent;
  let fixture: ComponentFixture<ModificaPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificaPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
