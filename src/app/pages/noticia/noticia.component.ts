import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoticiaModel } from '../../models/noticia.models';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styles: []
})
export class NoticiaComponent implements OnInit {
  public noticia = new NoticiaModel()

  constructor(private noticiasService: NoticiasService) {

  }

  ngOnInit() {
  }
  guardar( event : NgForm){
    if(event.invalid){
      console.log("Formulario no valido");
      return
    }
    this.noticiasService.crearNoticia( this.noticia )/* .subscribe( resp =>{
      console.log(resp);
    }) */
    /* console.log(event);
    console.log(this.noticia);  */
  }
}
