import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPessoaComponent } from './cadastro-pessoa.component';
import { ComponentsModule } from '../../components/components.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    CadastroPessoaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ timeOut: 1500 }),
  ]
})
export class CadastroPessoaModule { }
