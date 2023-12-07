import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { JuegoTerminadoScreenComponent } from './screens/juego-terminado-screen/juego-terminado-screen.component';
import { BasesPromocionScreenComponent } from './screens/bases-promocion-screen/bases-promocion-screen.component';
import { PoliticaPrivacidadScreenComponent } from './screens/politica-privacidad-screen/politica-privacidad-screen.component';
import { TycScreenComponent } from './screens/tyc-screen/tyc-screen.component';
import { PdpNoregistroScreenComponent } from './screens/pdp-noregistro-screen/pdp-noregistro-screen.component';
import { TycNoregistroScreenComponent } from './screens/tyc-noregistro-screen/tyc-noregistro-screen.component';
import { InstruccionesScreenComponent } from './screens/instrucciones-screen/instrucciones-screen.component';
import { JuegoComponent } from './screens/juego/juego.component';
import { JuegoScreenComponent } from './screens/juego-screen/juego-screen.component';
import { UsuarioScreenComponent } from './screens/usuario-screen/usuario-screen.component';

const routes: Routes = [
  { path: '', component: LoginScreenComponent, pathMatch: 'full' },
  { path: 'registro', component: RegistroScreenComponent, pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent, pathMatch: 'full' },
  { path: 'juego-terminado', component: JuegoTerminadoScreenComponent, pathMatch: 'full' },
  { path: 'bases-promocion', component: BasesPromocionScreenComponent, pathMatch: 'full' },
  { path: 'politica-privacidad', component: PoliticaPrivacidadScreenComponent, pathMatch: 'full' },
  { path: 'terminos-condiciones', component: TycScreenComponent, pathMatch: 'full' },
  { path: 'politica-noregistro', component: PdpNoregistroScreenComponent, pathMatch: 'full' },
  { path: 'tyc-noregistro', component: TycNoregistroScreenComponent, pathMatch: 'full' },
  { path: 'instrucciones', component: InstruccionesScreenComponent, pathMatch: 'full' },
  { path: 'juego', component: JuegoScreenComponent, pathMatch: 'full' },
  { path: 'pantalla-juego', component: JuegoComponent, pathMatch: 'full' },
  { path: 'usuario', component: UsuarioScreenComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
