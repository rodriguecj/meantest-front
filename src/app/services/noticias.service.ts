import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NoticiaModel } from '../models/noticia.models';
import { delay } from 'rxjs/operators';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private url: string;

  constructor( private http: HttpClient ) { 
    this.url = Global.url
  }
  getNoticias(){
    /* console.log('Noticias cargadas prueba') */
      let headers = new HttpHeaders().set('Content-type','application/json');
      return this.http.get(`${ this.url }/noticias`, {headers: headers})
  }
  getNoticia( id: string ){
    return this.http.get(`${ this.url }/noticia/${ id }`)
  }
  deleteNoticia( id: string ){
    return this.http.delete(`${ this.url }/noticia/${ id }`).pipe(
      delay(1500)
    )
  }
  saveNoticia( noticia: NoticiaModel){
    let params = JSON.stringify( noticia );
    let headers = new HttpHeaders().set('Content-type','application/json');
    return this.http.post( `${ this.url }/save-noticia`, params, {headers: headers})
  }
  updateNoticia( noticia: NoticiaModel){
    return  this.http.put(`${ this.url }/noticia/${noticia._id}`, noticia)
  }
}
