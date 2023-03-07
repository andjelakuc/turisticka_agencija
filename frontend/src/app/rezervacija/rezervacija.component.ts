import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aranzman } from 'src/models/aranzman';
import { Rezervaija as Rezervacija } from 'src/models/rezervacija';
import { RezervacijaService } from '../services/rezervacija.service';

@Component({
  selector: 'app-rezervacija',
  templateUrl: './rezervacija.component.html',
  styleUrls: ['./rezervacija.component.css']
})
export class RezervacijaComponent implements OnInit {

  constructor(private ruter : Router, private rezervacijaService: RezervacijaService) { }

  ime:string;
  prezime: string;
  telefon: string;
  email: string;
  nacinPlacanja: string;
  brojOdraslih: string;
  brojDece: string;
  komentar: string;
  status: string;
  aranzman: Aranzman;
  message: string;

  ngOnInit(): void {
    this.aranzman = JSON.parse(sessionStorage.getItem('aranzman'));
  }

  dodajRezervaciju(){
    var novaRezervacija : Rezervacija = new Rezervacija();
    novaRezervacija.ime= this.ime;
    novaRezervacija.prezime = this.prezime;
    novaRezervacija.telefon = this.telefon;
    novaRezervacija.email = this.email;
    novaRezervacija.nacinPlacanja = this.nacinPlacanja
    novaRezervacija.brojOdraslih = this.brojOdraslih;
    novaRezervacija.brojDece = this.brojDece;;
    novaRezervacija.komentar =this.komentar;
    novaRezervacija.status = this.status;
    novaRezervacija.nazivAranzmana = this.aranzman.naziv;

    this.rezervacijaService.dodajRezervaciju(novaRezervacija).subscribe((resp)=>{
      if ( resp['message'] === 'ok') {
          alert("Uspesno ste dodali rezervaciju");
          this.ruter.navigate(['/aranzman']);
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
    this.ruter.navigate(['dodajAranzman']);
  }

}
