import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aranzman } from 'src/models/aranzman';
import { Korisnik } from 'src/models/korisnik';
import { AranzmanService } from '../services/aranzman.service';
import { Smestaj } from 'src/models/smestaj';
import { SmestajService } from '../services/smestaj.service';


@Component({
  selector: 'app-aranzman',
  templateUrl: './aranzman.component.html',
  styleUrls: ['./aranzman.component.css']
})
export class AranzmanComponent implements OnInit {

  constructor(private ruter : Router, private AranzmanService:AranzmanService, private SmestajService:SmestajService) { }
  ulogovanKorisnik: Korisnik;
  aranzman: Aranzman;
  smestaj: Smestaj;
  danasnjiDatum: Date = new Date;

  ngOnInit(): void { 
    this.ulogovanKorisnik = JSON.parse(sessionStorage.getItem('ulogovan'));
    this.aranzman = JSON.parse(sessionStorage.getItem('aranzman'));

    this.SmestajService.dohvatiSmestaj(this.aranzman.smestaj).subscribe((data: Smestaj)=>{
      this.smestaj = data;
      console.log(data);
    })
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

  prijava(){
    this.ruter.navigate(['logovanje']);
  }

  rezervisi(){
    this.ruter.navigate(['rezervacija']);
  }

  azuriraj(){

  }
}
