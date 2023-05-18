import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { ErrorComponent } from './componentes/error/error.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { UsuarioRegistroComponent } from './componentes/usuario-registro/usuario-registro.component';
import { UsuarioIngresoComponent } from './componentes/usuario-ingreso/usuario-ingreso.component';
import { LoginGuard } from 'src/login.guard';
import { IsAdminGuard } from 'src/is-admin.guard';
import { SalePedidosComponent } from './componentes/sale-pedido/sale-pedidos/sale-pedidos.component';
import { AltasProductosComponent } from './componentes/altas-productos/altas-productos.component';
import { ListadoPublicoComponent } from './componentes/listado-publico/listado-publico.component';
import { ContenedorAltaComponent } from './componentes/contenedor-alta/contenedor-alta.component';
const routes: Routes = [
  {path:"", title:"Bienvenido", component: BienvenidoComponent},
  {path:"bienvenida", redirectTo:""},
  {path:"búsqueda", title:"Repartidor Detalles", component: BusquedaComponent , canActivate :[LoginGuard]},
  {path:"usuario/ingreso", title:"Ingreso", component: UsuarioIngresoComponent},
  {path:"pedidos/alta", title:"Alta", component: SalePedidosComponent},
  {path:"actor/alta", title:"Alta", component: AltasProductosComponent, canActivate :[LoginGuard]},
  {path:"contenerdor/alta", title:"Alta Contenedor", component: ContenedorAltaComponent, canActivate :[IsAdminGuard]},
  {path:"usuario/registro", title:"Registro", component: UsuarioRegistroComponent},
  {path:"listado/publico", title:"Registro", component: ListadoPublicoComponent},
  {path:"error", title:"ERROR", component: ErrorComponent},
  {path: '**', redirectTo: 'error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

