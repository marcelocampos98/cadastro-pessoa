import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { CadastroPessoaComponent } from "./pages/cadastro-pessoa/cadastro-pessoa.component";

const routes: Routes = [
    { path: '', redirectTo: 'cadastro-pessoa', pathMatch: 'full' },
    { path: 'cadastro-pessoa', component: CadastroPessoaComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }