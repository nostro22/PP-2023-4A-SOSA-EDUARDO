import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/servicios/firestore.service';


@Component({
  selector: 'app-modifica-pedido',
  templateUrl: './modifica-pedido.component.html',
  styleUrls: ['./modifica-pedido.component.css']
})
export class ModificaPedidoComponent {
  @Input() pedidoRecibido?: any;

  constructor(private fb: FormBuilder, private firestore: FirestoreService) {
  }
  get nombre() {
    return this.formUser.get('nombre') as FormControl;
  }
  get email() {
    return this.formUser.get('email') as FormControl;
  }
  get localidad() {
    return this.formUser.get('localidad') as FormControl;
  }
  get direccion() {
    return this.formUser.get('direccion') as FormControl;
  }
  get descripcion() {
    return this.formUser.get('descripcion') as FormControl;
  }
  get precio() {
    return this.formUser.get('precio') as FormControl;
  }
  get peso() {
    return this.formUser.get('peso') as FormControl;
  }
  get estado() {
    return this.formUser.get('estado') as FormControl;
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    // TODO: Modify the image using the selected file
  }
  setLocalidad(event: any) {
    this.localidad.setValue(event.target.value);
  }

  modificarPedido() {

    alert(this.pedidoRecibido);
    // pedido.nombreCliente = this.nombre.value,
    //   pedido.localidad = this.localidad.value,
    //   pedido.direccion = this.direccion.value,
    //   pedido.descripcion = this.descripcion.value,
    //   pedido.precio = this.precio.value,
    //   pedido.peso = this.peso.value,
    //   pedido.estado = this.estado.value;

    //this.eventoEnvioPedido.emit(pedidoNuevo);
  }

  formUser = this.fb.group({
    'nombre': ["",
      [
        Validators.required
      ]
    ],
    'email': ["",
      [
        Validators.required, Validators.email
      ]
    ],
    'localidad': ["",
      [
        Validators.required
      ]
    ],
    'direccion': ["",
      [
        Validators.required
      ]
    ],
    'descripcion': ["",
      [
        Validators.required, Validators.maxLength(100)
      ]
    ],
    'precio': ["",
      [
        Validators.required, Validators.min(1)
      ]
    ],
    'peso': ["",
      [
        Validators.required, Validators.min(500), Validators.max(1000)
      ]
    ],
    'estado': ["",
      [
        Validators.required
      ]
    ],
  });

}
