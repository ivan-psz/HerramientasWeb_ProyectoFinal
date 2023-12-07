import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juego-screen',
  templateUrl: './juego-screen.component.html',
  styleUrls: ['./juego-screen.component.scss']
})
export class JuegoScreenComponent implements OnInit {

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
      
  }

  public omitir(){
    this.router.navigate(['pantalla-juego']);
  }

  public usarLentes(){
    this.router.navigate(['pantalla-juego']);
  }

}
