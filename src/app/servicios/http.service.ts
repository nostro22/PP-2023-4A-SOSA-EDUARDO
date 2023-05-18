import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, forkJoin, map, take, throwError } from 'rxjs';
import { Pais } from '../clases/pais';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  africa: string = 'https://restcountries.com/v3.1/region/Africa/?fields=flags,subregion,translations,capital,languages,population';
  europa: string = 'https://restcountries.com/v3.1/region/Europe/?fields=flags,subregion,translations,capital,languages,population';
  listaPaises:any=[];

  
  obtenerPaisesAfrica(): Observable<any> {
    
    return this.http.get<any[]>(this.africa).pipe(
      map(response => {
        // Extraer las traducciones y las banderas de cada país
        const paises = response.map(pais => ({
          nombre: pais.translations.spa.official,
          imagen: pais.flags.png
        }));
        // Limitar la lista de países a solo 3 elementos
        return paises.slice(0, 3);
      })
    );
  }
  obtenerPaisesEuropa(): Observable<any> {
    
    return this.http.get<any[]>(this.europa).pipe(
      map(response => {
        // Extraer las traducciones y las banderas de cada país
        const paises = response.map(pais => ({
          nombre: pais.translations.spa.official,
          imagen: pais.flags.png,
          info :pais
        }));
        // Limitar la lista de países a solo 3 elementos
        return paises.slice(0, 3);
      })
    );
  }

  obtenerPaisesCombinados(): Observable<any[]> {
    return forkJoin([
      this.obtenerPaisesAfrica(),
      this.obtenerPaisesEuropa()
    ]).pipe(
      map(([paisesAfrica, paisesEuropa]) => {
        // Combinar y retornar los resultados de los dos métodos
        return [...paisesAfrica, ...paisesEuropa];
      })
    );
  }

  

}
