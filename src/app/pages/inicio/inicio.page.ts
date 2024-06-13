import { Component, OnInit } from '@angular/core';


interface componente{
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'american-football-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'american-football-outline',
      name: 'Input',
      redirectTo: '/input'
    },
    {
      icon: 'american-football-outline',
      name: 'Data Time',
      redirectTo: '/data-time'
    },
    {
      icon: 'american-football-outline',
      name: 'Action-Sheet',
      redirectTo: '/action-sheet'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
