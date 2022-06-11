import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { EnvioDataComponent } from './components/envio-data/envio-data.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TabladComponent } from './components/tablad/tablad.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'registro',component:RegistroComponent},
  {path:'login',component:LoginComponent},
  {path:'contacto',component:ContactComponent},
  {path:'tabla',component:TabladComponent},
  {path:'dts-enviados',component:EnvioDataComponent},
  {path:'info',component:InfoComponent},
  {path:'editar-registro/:id',component:RegistroComponent},
  {path:'404',component:NotFoundComponent},
  {path:'**', redirectTo: '404', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
