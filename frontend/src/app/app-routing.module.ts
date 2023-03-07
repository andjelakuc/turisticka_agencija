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
  {path: '', component:PretragaComponent},
  {path: 'logovanje', component:LogovanjeComponent},
  {path: 'rezervacije', component:RezervacijeComponent},
  {path: 'rezervacija', component:RezervacijaComponent},
  {path: 'registrovanje', component:RegistrovanjeComponent},
  {path: 'dodajAranzman', component:DodajAranzmanComponent},
  {path: 'aranzman', component:AranzmanComponent},
  {path: 'azurirajAranzman', component:AzurirajAranzmanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
