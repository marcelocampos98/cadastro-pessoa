import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TipoInput } from 'src/app/enum/tipo-input.enum';
import { CadastroPessoaForm } from 'src/app/forms/cadastro-pessoa-form';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {
  public tipoInput = TipoInput;

  public pessoa = new CadastroPessoaForm();

  public isEnviado = false;

  constructor(
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void { }

  public salvar() {
    console.log(this.pessoa.value);
    this.pessoa.disableForm();
    this.toastrService.success('Cadastro Enviado com sucesso!');
    this.isEnviado = true;
  }
}
