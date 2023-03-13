import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AranzmanComponent } from './aranzman/aranzman.component';
import { AzurirajAranzmanComponent } from './azuriraj-aranzman/azuriraj-aranzman.component';
import { DodajAranzmanComponent } from './dodaj-aranzman/dodaj-aranzman.component';
import { LogovanjeComponent } from './logovanje/logovanje.component';
import { PretragaComponent } from './pretraga/pretraga.component';
import { RegistrovanjeComponent } from './registrovanje/registrovanje.component';
import { RezervacijaComponent } from './rezervacija/rezervacija.component';
import { RezervacijeComponent } from './rezervacije/rezervacije.component';

const routes: Routes = [
  {path: '', component:PretragaComponent, title: "Turisticka agencija"},
  {path: 'logovanje', component:LogovanjeComponent, title: "Turisticka agencija"},
  {path: 'rezervacije', component:RezervacijeComponent, title: "Turisticka agencija"},
  {path: 'rezervacija', component:RezervacijaComponent, title: "Turisticka agencija"},
  {path: 'registrovanje', component:RegistrovanjeComponent, title: "Turisticka agencija"},
  {path: 'dodajAranzman', component:DodajAranzmanComponent, title: "Turisticka agencija"},
  {path: 'aranzman', component:AranzmanComponent, title: "Turisticka agencija"},
  {path: 'azurirajAranzman', component:AzurirajAranzmanComponent, title: "Turisticka agencija"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
