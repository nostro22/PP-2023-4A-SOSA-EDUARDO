import { Injectable } from '@angular/core';
import { CollectionReference, docSnapshots, onSnapshot, DocumentReference, Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDocs, updateDoc, query, where, DocumentData, Query, and } from '@angular/fire/firestore';
import { Data } from '@angular/router';
import { Usuario } from '../clases/usuario';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail  } from "firebase/auth";
import { BehaviorSubject, Observable, Subject, from, map } from 'rxjs';
import { getAdditionalUserInfo, signOut } from '@angular/fire/auth';
import { Producto } from '../clases/productos';
import { ToastrService  } from 'ngx-toastr';




@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  col: CollectionReference;
  colRepartidores :CollectionReference = collection(this.firestore,'repartidores');
  colUsuarios: CollectionReference;
  docUsuarios: DocumentReference;
  doc: any;
  private tokenSubject = new BehaviorSubject<string>('');
  constructor(private firestore: Firestore, private toastCtrl : ToastrService ) {
    
    this.col = collection(this.firestore, 'peliculas');
    this.colUsuarios = collection(this.firestore, 'usuarios');
    this.doc = doc(this.firestore, 'peliculas', '1');
    this.docUsuarios = doc(this.firestore, 'usuarios', '1');
  }

  traer(collectionRef:CollectionReference) {
    const obsevable = collectionData(collectionRef);
    return obsevable.subscribe((respuesta) => {
    });
  }

  borrar(nombreDocumento: string, idDocumento: string) {
    const documento = doc(this.firestore, nombreDocumento, idDocumento);
    deleteDoc(documento);
  }


  
  async altaProductos(repartidor: Producto) {
    try {
      const col = collection(this.firestore, 'productos');
      const repartidorObjecto = repartidor.toFirestoreObject();
      await addDoc(col, repartidorObjecto);
     this.toastNotificationExito('producto agregado con exito');
    } catch (error) {
      console.error('Error agregando documento:', error);
    }
  }
  

  altaUsuario(usuario: Usuario, email: string, password: string) {
    const auth = getAuth();
    const usuarioObj = usuario.toFirestoreObject();

    return addDoc(this.colUsuarios, usuarioObj)
      .then((docRef) => {
        const newId = docRef.id;
        usuario.setId(newId);
        updateDoc(docRef, usuario.toFirestoreObject());
        console.log('Document added with ID:', newId);

        // Create new Firebase Authentication user
        return createUserWithEmailAndPassword(auth, email, password);
      })
      .catch((error) => {
        console.error('Error adding document:', error);
      });
  }
  

  get token$(): Observable<string> {
    return this.tokenSubject.asObservable();
  }
async signIn(email: string, password: string): Promise<any> {
  const auth = getAuth();
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const token = userCredential.user?.uid || '';
  localStorage.setItem('token', token); // save token to localStorage
  this.tokenSubject.next(token);
  return userCredential;
}

  
  async cerrarSeccion(): Promise<void> {
    const auth = getAuth();
    await signOut(auth);
    this.tokenSubject.next('');
  }
  async checkIfUserExists(email: string): Promise<boolean> {
    try {
      const auth = getAuth();
      const methods = await fetchSignInMethodsForEmail(auth,email);
      return methods.length > 0;
    } catch (error) {
      console.error('Error checking if user exists:', error);
      return false;
    }
  }
  async esAdministrador(): Promise<boolean> {
    const collectionRef = collection(this.firestore, 'usuarios');
    const queryRef: Query<DocumentData> = query(collectionRef, where( 'tipo', '==', 'administrador'),where( 'email','==',getAuth().currentUser?.email));
    const snapshot = await getDocs(queryRef);
     if(snapshot.empty){
      return false;
     }else{
      return true;
     }
  }
  async esUsuario(): Promise<boolean> {
    
         if(await getAuth().currentUser||localStorage.getItem("token")!=""){
          return true;
         }
         else{
          return false;
         }
  }



  async productoExiste(codigo: number): Promise<boolean> {
    const collectionRef = collection(this.firestore, 'productos');
    const queryRef: Query<DocumentData> = query(collectionRef, where('codigo', '==', codigo));
    const snapshot = await getDocs(queryRef);
    return !snapshot.empty;
  }
  async getProductosWithStock(): Promise<DocumentData[]> {
    const collectionRef = collection(this.firestore, 'productos');
    const queryRef: Query<DocumentData> = query(collectionRef, where('stock', '>', 0));
    const snapshot = await getDocs(queryRef);
    return snapshot.docs.map((doc) => doc.data());
  }
  async toastNotificationExito(mensaje: any) {
    this.toastCtrl.success(mensaje, 'Success', { positionClass: 'toast-top-center' });
  }

  async toastNotificationDanger(mensaje: any) {
    this.toastCtrl.error(mensaje, 'Error', { positionClass: 'toast-top-center' });
  }

  

}