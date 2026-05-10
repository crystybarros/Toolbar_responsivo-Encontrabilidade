import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';

type MenuMode = 'desktop'| 'mobile';

@Component({
  selector: 'app-nav-links',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatIconModule,
    MatMenuModule


  ],
  templateUrl: './nav-links.html',
  styleUrl: './nav-links.scss',
})
export class NavLinks {

  @Input() mode: MenuMode = 'desktop';

  links = [
    {
      label: 'Cadastro',
      route: '/cadastro',
      icon: 'edit_square',
    },
    {
      label: 'Pesquisa',
      route: '/pesquisa',
      icon: 'search',
    },
    {
      label: 'Raltório',
      route: '/relatorio',
      icon: 'bar_chart',
    },
  ]
}
