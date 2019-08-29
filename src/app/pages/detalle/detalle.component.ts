import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { ActivatedRoute } from '@angular/router';
import { NoticiaModel } from '../../models/noticia.models';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
})
export class DetalleComponent implements OnInit {
  private id: string
  public noticia = new NoticiaModel 
  public cargando: boolean = false
  constructor( private noticiasService: NoticiasService,
                private route: ActivatedRoute
    ) { 
     }

  ngOnInit() {
    this.cargando = true
    this.id = this.route.snapshot.paramMap.get('id');
    this.cargarNoticia( this.id )
  }
  cargarNoticia( id: string ){
    return this.noticiasService.getNoticia( id ).subscribe( res =>{
      this.cargando = false
      this.noticia = res['noticia'];
    })
  }
}
