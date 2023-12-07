import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  public name_user: string = "Iván";
  public isLoading: boolean = false;
  public tiene_juegos_pendientes: boolean = false;
  public lista_codigos: any[] = [];

  //Form dinámico de campos de texto
  public inputsCodigo: FormGroup;
  public tiendas: any[] = [{value: "liverpool", nombre: "Liverpool"}, {value:"devlyn", nombre: "Ópticas Devlyn"}];
  public selectedValue: string = "";
  public participacion: any = {};

  constructor(
    private router: Router,
    private fb: FormBuilder
  ){ }

  ngOnInit(): void {
    this.initInputsCodigo();
    this.obtenerCodigos();
  }

  public saberMas(){
    this.router.navigate(["bases-promocion"]);
  }

  public isMobile(tipo: number){
    switch(tipo){
      case 1:
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
          return "style-mobile";
        }else{
          return "interior-codigos";
        }
        break;
      case 2:
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
          return "style-mobile";
        }else{
          return "interior-codigos-registrados";
        }
        break;
    }
  }

  initInputsCodigo(){
    this.inputsCodigo = this.fb.group({
      listaInputs: this.fb.array([this.fb.group({valor:'', extra: false})])
    });

    for (let i = 0; i < 7; i++) {
      const control_1 = <FormArray>this.inputsCodigo.controls['listaInputs'];
      control_1.push(this.fb.group({valor:'', extra: false}));
    }
  }

  get getCamposInputs(){
    return this.inputsCodigo.get('listaInputs') as FormArray;
  }

  public changeTienda(event: any){
    console.log("Value: ",this.participacion.tienda);
  }

  public registrarCodigo(){
    this.router.navigate(['instrucciones']);
  }

  public jugarParticipacion(codigo: any){
    this.router.navigate(['instrucciones']);
  }

  public obtenerCodigos(){
    this.lista_codigos = [
      {
        "creation": "2022-10-18",
        "codigo": 264956,
        "puntos_totales": 1100,
        "puntos_codigo": 1000,
        "puntos_jugar": 100
      },
      {
        "creation": "2022-10-19",
        "codigo": 106347,
        "puntos_totales": 1300,
        "puntos_codigo": 1000,
        "puntos_jugar": 300
      },
      {
        "creation": "2022-10-24",
        "codigo": 967532,
        "puntos_totales": 1200,
        "puntos_codigo": 1000,
        "puntos_jugar": 200
      }
    ];
  }

}
