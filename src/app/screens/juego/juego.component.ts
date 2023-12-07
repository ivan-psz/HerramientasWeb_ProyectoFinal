import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent {

  constructor(
    private router: Router
  ){}

  public goJuegoTerminado(){
    this.router.navigate(['juego-terminado']);
  }

}
