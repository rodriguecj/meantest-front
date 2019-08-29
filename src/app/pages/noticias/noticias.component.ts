import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styles: []
})
export class NoticiasComponent implements OnInit {

  constructor( private noticiasService: NoticiasService) { 
    this.noticiasService.cargarNoticias()
  }

  ngOnInit() {
  }

}
