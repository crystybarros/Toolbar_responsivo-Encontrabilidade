import { Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { Pesquisa } from './pesquisa/pesquisa';

export const routes: Routes = [
  {path: 'cadastro', component: Cadastro},
  {path: 'pesquisa', component: Pesquisa}
];
