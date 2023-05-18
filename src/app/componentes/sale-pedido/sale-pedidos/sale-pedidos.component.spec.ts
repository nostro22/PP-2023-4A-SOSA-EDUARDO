import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePedidosComponent } from './sale-pedidos.component';

describe('SalePedidosComponent', () => {
  let component: SalePedidosComponent;
  let fixture: ComponentFixture<SalePedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalePedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalePedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
