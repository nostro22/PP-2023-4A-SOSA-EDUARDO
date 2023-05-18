import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/clases/productos';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent {
  @Input() detalleRecibido?:Producto;
}
