import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { ErrorComponent } from './componentes/error/error.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BajaPeliculaComponent } from './componentes/baja-pelicula/baja-pelicula.component';
import { FormBuilder, FormControl, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsuarioRegistroComponent } from './componentes/usuario-registro/usuario-registro.component';
import { UsuarioIngresoComponent } from './componentes/usuario-ingreso/usuario-ingreso.component';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';
import { SalePedidosComponent } from './componentes/sale-pedido/sale-pedidos/sale-pedidos.component';
import { ModificaPedidoComponent } from './componentes/sale-pedido/modifica-pedido/modifica-pedido.component';
import { AltasProductoFormularioComponent } from './componentes/altas-producto-formulario/altas-producto-formulario.component';
import { AltasProductosComponent } from './componentes/altas-productos/altas-productos.component';
import { DetalleProductoComponent } from './componentes/detalle-repartidor/detalle-producto.component';
import { ListadoPublicoComponent } from './componentes/listado-publico/listado-publico.component';



@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    ErrorComponent,
    HeaderComponent,
    BienvenidoComponent,
    BajaPeliculaComponent,
    TablaPaisesComponent,
    UsuarioRegistroComponent,
    UsuarioIngresoComponent,
    DetallePaisComponent,
    SalePedidosComponent,
    ModificaPedidoComponent,
    AltasProductoFormularioComponent,
    AltasProductosComponent,
    DetalleProductoComponent,
    ListadoPublicoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
