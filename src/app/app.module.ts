import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';

import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { HeaderAppComponent } from './partials/header-app/header-app.component';
import { LeftSidebarComponent } from './partials/left-sidebar/left-sidebar.component';
import { FooterAppComponent } from './partials/footer-app/footer-app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    RegistroScreenComponent,
    HomeScreenComponent,
    HeaderAppComponent,
    LeftSidebarComponent,
    FooterAppComponent,
    JuegoTerminadoScreenComponent,
    BasesPromocionScreenComponent,
    PoliticaPrivacidadScreenComponent,
    TycScreenComponent,
    PdpNoregistroScreenComponent,
    TycNoregistroScreenComponent,
    InstruccionesScreenComponent,
    JuegoComponent,
    JuegoScreenComponent,
    UsuarioScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
