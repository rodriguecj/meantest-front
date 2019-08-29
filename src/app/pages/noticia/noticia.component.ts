import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoticiaModel } from '../../models/noticia.models';
import { NoticiasService } from '../../services/noticias.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html'
})
export class NoticiaComponent implements OnInit {
  public noticia = new NoticiaModel()

  constructor(private noticiasService: NoticiasService, 
    private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    if( id !== "nuevo" ){
      this.obtenerNoticia( id )
    }
  }

  ngOnInit() {
  }
  obtenerNoticia( id: string ){
    return this.noticiasService.getNoticia( id ).subscribe( res =>{
      this.noticia = res['noticia']
    })
  }
  guardar( event : NgForm){
    if(event.invalid){
      return
    }
    let peticion: Observable<any>
    if( this.noticia['_id'] ){
       peticion = this.noticiasService.updateNoticia( this.noticia )/* .subscribe( res=>{
      }) */
    }else{
       peticion = this.noticiasService.saveNoticia( this.noticia )/* .subscribe( (resp: NoticiaModel) =>{
        this.noticia = resp
      }) */
    }
    peticion.subscribe( res=>{
      event.reset()
      Swal.fire({
        text: 'Se ha guardado la noticia',
        type: 'success'
      })
    })
  }
}
