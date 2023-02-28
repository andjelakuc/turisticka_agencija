import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from 'src/models/korisnik';
import { AranzmanService } from '../services/aranzman.service';

@Component({
  selector: 'app-dodaj-aranzman',
  templateUrl: './dodaj-aranzman.component.html',
  styleUrls: ['./dodaj-aranzman.component.css']
})
export class DodajAranzmanComponent implements OnInit {

  constructor(private ruter : Router, private AranzmanService:AranzmanService) { }

  ulogovanKorisnik: Korisnik;

  ngOnInit(): void { 
    this.ulogovanKorisnik = JSON.parse(sessionStorage.getItem('ulogovan'));

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
