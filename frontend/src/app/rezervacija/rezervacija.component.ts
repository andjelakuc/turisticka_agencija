import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rezervacija',
  templateUrl: './rezervacija.component.html',
  styleUrls: ['./rezervacija.component.css']
})
export class RezervacijaComponent implements OnInit {

  constructor(private ruter : Router) { }

  ime:string;
  prezime:string;
  telefon: string;
  email: string;
  brojOsoba: string;
  komentar: string;
  placanje: string;
  message: string;
  ngOnInit(): void {
  }

  dodajRezervaciju(){

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
