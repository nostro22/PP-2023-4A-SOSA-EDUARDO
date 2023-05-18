import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Usuario } from 'src/app/clases/usuario';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Producto } from 'src/app/clases/productos';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-altas-producto-formulario',
  templateUrl: './altas-producto-formulario.component.html',
  styleUrls: ['./altas-producto-formulario.component.css']
})
export class AltasProductoFormularioComponent {
  public constructor(private fb: FormBuilder, private firebase: FirestoreService , private toastr:ToastrService, private router:Router) { }
  
  private paisRecibido:Pais=new Pais("","","");
 
  
  get codigo() {
    return this.formularioRegistro.get('codigo') as FormControl;
  }
  get descripcion() {
    return this.formularioRegistro.get('descripcion') as FormControl;
  }
  get precio() {
    return this.formularioRegistro.get('precio') as FormControl;
  }
  get stock() {
    return this.formularioRegistro.get('stock') as FormControl;
  }
  get pais() {
    return this.formularioRegistro.get('pais') as FormControl;
  }
  get comestible() {
    return this.formularioRegistro.get('comestible') as FormControl;
  }
 

  poseeUnidad():boolean{
    if(this.comestible.value=="SI"){
      return true;
    }
    else{
      return false;
    }
  }
 


  public formularioRegistro = this.fb.group({
    'codigo': ['', [Validators.required, Validators.min(10), Validators.max(99999999)]],
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required, Validators.min(1), Validators.max(10000)]],
    'stock': ['', [Validators.required, Validators.min(1), Validators.max(10000)]],
    'pais': ['', [Validators.required]],
    'comestible': ['', Validators.required],
    'terminos': ['', Validators.requiredTrue],
  });

  private spacesValidator(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const spaces = nombre.includes(' ');

    return spaces
      ? { containsSpaces: true }
      : null;
  }

 
  paisRecibidoMain(pais:any){
    this.paisRecibido=new Pais(pais.nombre,pais.imagen,pais);
    this.pais.setValue(pais.nombre);
  }
 
  async registrar() {
    if (this.formularioRegistro.valid) {
      
      const repartidor = new Producto(this.codigo.value,this.descripcion.value,this.precio.value,this.stock.value,this.paisRecibido,this.poseeUnidad());
      

      if(!await this.firebase.productoExiste(repartidor.codigo))
      {
        this.firebase.altaProductos(repartidor)
        .then(() => {
          this.firebase.toastNotificationExito('registrado con éxito.');
          this.formularioRegistro.reset();
        })
        .catch(error => {
          console.error(error);
          // Handle any errors that occur during registration
        });
      }
      else{
        this.firebase.toastNotificationDanger("Ya esta registrado");
      }
     
    } else {
      console.warn('Formulario de registro no válido.');
    }
  }

  setUnidad(posee:boolean){

    if(posee)
    {
     this.comestible.setValue("SI");
    }
    else{
      this.comestible.setValue("NO");
    }
  }
}
