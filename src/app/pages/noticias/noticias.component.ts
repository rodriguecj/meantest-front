import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { NoticiaModel } from '../../models/noticia.models';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html'
})
export class NoticiasComponent implements OnInit {
  public noticias: NoticiaModel[] = [];
  public cargando: boolean = false
  constructor( private noticiasService: NoticiasService) { 
    
  }
  ngOnInit() {
    this.cargando = true
    this.cargarNoticias()
  }
  cargarNoticias(){
    this.noticiasService.getNoticias().subscribe( res=> {
      this.cargando = false
      this.noticias = res['noticias'];
    })
  }
  borrarNoticia( id: string, i: number){
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'Segurdo de eliminar la noticia',
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar'
    }).then( res =>{
      if(res.value){
        this.noticias.splice( i, 1)
        this.noticiasService.deleteNoticia( id ).subscribe()
      }
    })
  }

}
