import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Firestore, Timestamp, collection, collectionData } from '@angular/fire/firestore';
import { Producto } from 'src/app/clases/productos';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  @Output() eventoParaDetalle: EventEmitter<any> = new EventEmitter<any>();
 
  vista: boolean = true;
  productos$: Observable<any[]>;
  productoSelecionado!: Producto;

  cambiarVista() {
    this.vista = !this.vista;
  }
  
  // detalleRecibidoMain($event: any) {
  //   this.productoAMostrar = $event;
  //   console.info("En el mail", $event);
  // }
  firestore: Firestore = inject(Firestore)

  constructor() {
    const bCollection = collection(this.firestore, 'productos')
    this.productos$ = collectionData(bCollection).pipe(
      map((productos: any[]) => productos.map(producto => {
        //let repartidorFormateado = (pelicula.fechaDeEstreno as Timestamp).toDate();
        return new Producto(
          producto.codigo,
          producto.descripcion,
          producto.precio,
          producto.stock,
          producto.pais,
          producto.comestible,
          )
      })))
  }



  selecionarRepartidor(producto: any) {
    this.productoSelecionado=(producto);
   console.info("En el listado", producto);
  }
}


