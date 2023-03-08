import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from 'src/models/korisnik';
import { Rezervacija } from 'src/models/rezervacija';
import { RezervacijaService } from '../services/rezervacija.service';

@Component({
  selector: 'app-rezervacije',
  templateUrl: './rezervacije.component.html',
  styleUrls: ['./rezervacije.component.css']
})
export class RezervacijeComponent implements OnInit {

  constructor(private ruter : Router, private rezervacijaService:RezervacijaService ) { }

  ulogovanKorisnik: Korisnik;
  sveRezervacije: Array<Rezervacija>;

  ngOnInit(): void {

    this.ulogovanKorisnik = JSON.parse(sessionStorage.getItem('ulogovan'));
    this.rezervacijaService.dohvatiSveRezervacije().subscribe((data: Rezervacija[])=>{
      console.log("zavrsio pretragu")
      this.sveRezervacije  = data;
    })
  }

  prihvati(id){
    this.rezervacijaService.prihvatiRezervaciju(id).subscribe((resp)=>{
      if ( resp['message'] === 'ok') {
        window.location.reload();
      }});
  }

  odbi(id){
    this.rezervacijaService.odbiRezervaciju(id).subscribe((resp)=>{
      if ( resp['message'] === 'ok') {
        window.location.reload();
      }});
  }


  registrovanje(){
    this.ruter.navigate(['registrovanje']);
  }

  rezervacije(){
    this.ruter.navigate(['rezervacije']);
  }
  pretraga(){
    this.ruter.navigate(['']);
  }
  dodajAranzman(){
    this.ruter.navigate(['dodajAranzman'])
  }
}
