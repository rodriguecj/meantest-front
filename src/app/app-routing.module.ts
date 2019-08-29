import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* Componentes */
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { NoticiaComponent } from './pages/noticia/noticia.component';
import { DetalleComponent } from './pages/detalle/detalle.component';


const routes: Routes = [
  { path: 'noticias', component: NoticiasComponent },
  { path: 'noticia/:id', component: NoticiaComponent },
  { path: 'noticia/detalle/:id', component: DetalleComponent },
  { path: '**', component: NoticiasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
