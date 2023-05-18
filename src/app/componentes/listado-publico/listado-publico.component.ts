import { Component } from '@angular/core';
import { Observable, from } from 'rxjs';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-listado-publico',
  templateUrl: './listado-publico.component.html',
  styleUrls: ['./listado-publico.component.css']
})
export class ListadoPublicoComponent {
  productosTodos$: Observable<any[]>;

  constructor(private firestore: FirestoreService) {
    this.productosTodos$ = from(this.firestore.getProductosWithStock());
  }
}
