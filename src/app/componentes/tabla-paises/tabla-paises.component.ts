import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from 'src/app/servicios/http.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit{
  constructor(private servicio:HttpService){  }
  public listaPaises:any;
  @Output() eventoPais:EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {
     
    this.servicio.obtenerPaisesCombinados().forEach((element:any) => {
     this.listaPaises =(element);
    });
  }
  setPais(pais:any){
    this.eventoPais.emit(pais);
  }

 

}
