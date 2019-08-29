import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NoticiaModel } from '../models/noticia.models';
import { map } from 'rxjs/operators';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private url: string;

  constructor( private http: HttpClient ) { 
    this.url = Global.url
  }
  cargarNoticias(){
    console.log('Noticias cargadas prueba')
  }
  
  crearNoticia( noticia: NoticiaModel){
    /*this.http.post(`${this.url}/noticias.json`, noticia).pipe(
      map( (resp: any) =>{
        noticia.id = resp.name
      })
    ) .subscribe( res =>{
      console.log(res);
    } ) */


  }
}
