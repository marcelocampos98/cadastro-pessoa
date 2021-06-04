import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroPessoaModule } from './pages/cadastro-pessoa/cadastro-pessoa.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CadastroPessoaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
