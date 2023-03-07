import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aranzman } from 'src/models/aranzman';
import { Korisnik } from 'src/models/korisnik';
import { Smestaj } from 'src/models/smestaj';
import { SmestajService } from '../services/smestaj.service';

@Component({
  selector: 'app-azuriraj-aranzman',
  templateUrl: './azuriraj-aranzman.component.html',
  styleUrls: ['./azuriraj-aranzman.component.css']
})
export class AzurirajAranzmanComponent implements OnInit {

  constructor(private ruter : Router, private SmestajService :SmestajService) { }
  ulogovanKorisnik: Korisnik;
  aranzman: Aranzman;
  smestaj: Smestaj;


  ngOnInit(): void {
    this.ulogovanKorisnik = JSON.parse(sessionStorage.getItem('ulogovan'));
    this.aranzman = JSON.parse(sessionStorage.getItem('aranzman'));
    this.ulogovanKorisnik = JSON.parse(sessionStorage.getItem('ulogovan'));
    this.aranzman = JSON.parse(sessionStorage.getItem('aranzman'));

    this.SmestajService.dohvatiSmestaj(this.aranzman.smestaj[0]).subscribe((data: Smestaj)=>{
      this.smestaj = data;
      console.log(data);
    })
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

  prijava(){
    this.ruter.navigate(['logovanje']);
  }

  rezervisi(){
    this.ruter.navigate(['rezervacija']);
  }

  registrovanje(){
    this.ruter.navigate(['registrovanje']);
  }
}
