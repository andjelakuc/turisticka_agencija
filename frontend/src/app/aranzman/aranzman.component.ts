import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aranzman } from 'src/models/aranzman';
import { Korisnik } from 'src/models/korisnik';
import { AranzmanService } from '../services/aranzman.service';
import { Smestaj } from 'src/models/smestaj';
import { SmestajService } from '../services/smestaj.service';
import { Lokacija } from 'src/models/lokacija';
import { LokacijaService } from '../services/lokacija.service';


@Component({
  selector: 'app-aranzman',
  templateUrl: './aranzman.component.html',
  styleUrls: ['./aranzman.component.css']
})
export class AranzmanComponent implements OnInit {

  constructor(private ruter : Router, private AranzmanService:AranzmanService, private SmestajService:SmestajService, private LokacijaService:LokacijaService) { }
  ulogovanKorisnik: Korisnik;
  aranzman: Aranzman;
  smestaj: Smestaj;
  danasnjiDatum: Date = new Date();
  prikaziRezervacija: boolean;
  sveLokacije: Array<Lokacija>

  ngOnInit(): void { 
    this.ulogovanKorisnik = JSON.parse(sessionStorage.getItem('ulogovan'));
    this.aranzman = JSON.parse(sessionStorage.getItem('aranzman'));

    this.SmestajService.dohvatiSmestaj(this.aranzman.smestaj[0]).subscribe((data: Smestaj)=>{
      this.smestaj = data;
    })
    var datumPolaska = new Date(this.aranzman.datumPolaska);
    if(this.danasnjiDatum > datumPolaska){
      this.prikaziRezervacija= false;
    } else{
      this.prikaziRezervacija= true;
    }

    this.LokacijaService.dohvatiSveLokacije().subscribe((data: Lokacija[])=>{
      this.sveLokacije  = data;
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
    this.ruter.navigate(['azurirajAranzman']);
  }
}
