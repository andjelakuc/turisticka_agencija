import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from 'src/models/korisnik';
import { KorisnikService } from '../services/korisnik.service';

@Component({
  selector: 'app-registrovanje',
  templateUrl: './registrovanje.component.html',
  styleUrls: ['./registrovanje.component.css']
})
export class RegistrovanjeComponent implements OnInit {

  constructor(private ruter : Router, private korisnikService:KorisnikService ) { }

  ulogovanKorisnik: Korisnik;

  
  korisnickoIme: string;
  message: string;
  lozinka: string;
  potvrdaLozinke: string;
  privilegija: string;


  ngOnInit(): void {

    this.ulogovanKorisnik = JSON.parse(sessionStorage.getItem('ulogovan'));

  }

  registracija(){

    if ( this.lozinka == this.potvrdaLozinke){
      var novKorisnik : Korisnik = new Korisnik();
      novKorisnik.korisnickoIme = this.korisnickoIme;
      novKorisnik.lozinka = this.lozinka;
      novKorisnik.privilegija= this.privilegija



      this.korisnikService.dodajKorisnika(novKorisnik).subscribe((resp)=>{
        if ( resp['message'] === 'ok') {
            alert("Uspesno ste registovali korisnika");
            this.ruter.navigate(['']);
        }
        else if ( resp['message'] === 'Korisnicko ime je zauzeto.') 
          this.message = 'Korisnicko ime je zauzeto.';
      })
    }
    else{
      alert("Unesite 2 puta identicnu lozinku");
    }
  }
  
  odjava(){
    sessionStorage.clear();
    this.ruter.navigate(['']);
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
