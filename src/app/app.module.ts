import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* Componentes */
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { NoticiaComponent } from './pages/noticia/noticia.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    NoticiaComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
