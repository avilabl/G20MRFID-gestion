import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NuevoAnimalComponent } from './components/nuevo-animal/nuevo-animal.component';
import { GestionAnimalComponent } from './components/gestion-animal/gestion-animal.component';
import { AnalisisComponent } from './components/analisis/analisis.component';
import { TranferenciaComponent } from './components/tranferencia/tranferencia.component';
import { SincronizacionComponent } from './components/sincronizacion/sincronizacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { FAQComponent } from './components/faq/faq.component';
import { UsuarioPlusComponent } from './components/usuario-plus/usuario-plus.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';


/*function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8082',
        realm: 'CG20MRFID',
        clientId: 'angular-client'
      },
      initOptions: {
        onLoad: 'login-required',
        flow: "standard",
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      },
      loadUserProfileAtStartUp: true
    });
}*/

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NuevoAnimalComponent,
    GestionAnimalComponent,
    AnalisisComponent,
    TranferenciaComponent,
    SincronizacionComponent,
    InicioComponent,
    ContactoComponent,
    ConfiguracionComponent,
    FAQComponent,
    UsuarioPlusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    //KeycloakAngularModule,
  ],
  providers: [
    /*{
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  */],
 bootstrap: [AppComponent]
})
export class AppModule { }
