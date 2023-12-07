import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrucciones-screen',
  templateUrl: './instrucciones-screen.component.html',
  styleUrls: ['./instrucciones-screen.component.scss']
})
export class InstruccionesScreenComponent implements OnInit{

  public lista_puntuaciones: any = [];

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    this.obtenerPuntos();
  }

  public obtenerPuntos(){
    this.lista_puntuaciones = [
      {
        "accion": "Código redimido",
        "puntos": 1000,
      },
      {
        "accion": "Jugar sin chocar de 0 a 30 segundos",
        "puntos": 100,
      },
      {
        "accion": "Jugar sin chocar de 31 a 60 segundos",
        "puntos": 200,
      },
      {
        "accion": "Jugar sin chocar de 61 a 90 segundos",
        "puntos": 300,
      },
      {
        "accion": "Jugar sin chocar de 91 a 120 segundos",
        "puntos": 400,
      },
    ];
  }

  public jugar(){
    this.router.navigate(['juego']);
  }

}
