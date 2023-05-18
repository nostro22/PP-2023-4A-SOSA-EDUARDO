import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

import { Observable, Subscription } from 'rxjs';
import { doc, deleteDoc, updateDoc } from "firebase/firestore";


import { ToastrService } from 'ngx-toastr';
import { HttpService } from './servicios/http.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  firestore: Firestore = inject(Firestore)
  items$: Observable<any[]>;
  peliculas$: Observable<any[]>;
  misBanderas: any[] | undefined;
  misPaises$: Observable<any> | undefined;
  bandera: string = "";

  constructor(private toastr: ToastrService, private http: HttpService) {
    const aCollection = collection(this.firestore, 'items')
    const bCollection = collection(this.firestore, 'peliculas')
    this.items$ = collectionData(aCollection);
    this.peliculas$ = collectionData(bCollection);
  }

  ngOnInit() {

  }
  buscarPais(nombre: string) {
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}