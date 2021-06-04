import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { IsMenorDeIdade } from "../validators/maior-idade-validator";

export class CadastroPessoaForm {
    private cadastroPessoa: FormGroup;

    constructor() {
        this.cadastroPessoa = new FormBuilder().group(new PessoaForm());
    }

    get form() {
        return this.cadastroPessoa;
    }

    get value() {
        return this.cadastroPessoa.value;
    }

    public disableForm() {
        this.cadastroPessoa.disable();
    }
}

export class PessoaForm {
    nome: FormControl;
    sobrenome: FormControl;
    dataNascimento: FormControl;
    celular: FormControl;
    email: FormControl;
    curriculo: FormControl;

    constructor() {
        this.nome = new FormControl(null, [Validators.required]);
        this.sobrenome = new FormControl(null, [Validators.required]);
        this.dataNascimento = new FormControl(null, [Validators.required, IsMenorDeIdade]);
        this.celular = new FormControl(null, [Validators.required]);
        this.email = new FormControl(null, [Validators.required, Validators.email]);
        this.curriculo = new FormControl(null, [Validators.required]);
    }
}