import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//camponentes:

import { GestionAnimalComponent } from './components/gestion-animal/gestion-animal.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NuevoAnimalComponent } from './components/nuevo-animal/nuevo-animal.component';
import { AnalisisComponent } from './components/analisis/analisis.component';
import { TranferenciaComponent } from './components/tranferencia/tranferencia.component';
import { SincronizacionComponent } from './components/sincronizacion/sincronizacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { FAQComponent } from './components/faq/faq.component';
import { UsuarioPlusComponent } from './components/usuario-plus/usuario-plus.component';

const routes: Routes = [
  {path: '', redirectTo :'/inicio', pathMatch:'full'},
  {path:'gestion-animal', component:GestionAnimalComponent },
  {path:'inicio', component:InicioComponent},
  {path:'nuevoanimal',component:NuevoAnimalComponent},
  {path:'analisis',component:AnalisisComponent},
  {path:'transferencia',component:TranferenciaComponent},
  {path:'sincronizacion',component:SincronizacionComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'configuracion',component:ConfiguracionComponent},
  {path:'FAQ',component:FAQComponent},
  {path:'User+',component:UsuarioPlusComponent},
  {path: '**', redirectTo :'/inicio', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
