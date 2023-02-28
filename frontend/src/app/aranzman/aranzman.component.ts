import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aranzman } from 'src/models/aranzman';
import { Korisnik } from 'src/models/korisnik';
import { AranzmanService } from '../services/aranzman.service';

@Component({
  selector: 'app-aranzman',
  templateUrl: './aranzman.component.html',
  styleUrls: ['./aranzman.component.css']
})
export class AranzmanComponent implements OnInit {

  constructor(private ruter : Router, private AranzmanService:AranzmanService) { }
  ulogovanKorisnik: Korisnik;
  aranzman: Aranzman;
  ngOnInit(): void { 
    this.ulogovanKorisnik = JSON.parse(sessionStorage.getItem('ulogovan'));
    this.aranzman = JSON.parse(sessionStorage.getItem('aranzman'));
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
