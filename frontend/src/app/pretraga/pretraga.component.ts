import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { Aranzman } from 'src/models/aranzman';
import { Korisnik } from 'src/models/korisnik';
import { Lokacija } from 'src/models/lokacija';
import { AranzmanService } from '../services/aranzman.service';
import { LokacijaService } from '../services/lokacija.service';

@Component({
  selector: 'app-pretraga',
  templateUrl: './pretraga.component.html',
  styleUrls: ['./pretraga.component.css']
})
export class PretragaComponent implements OnInit {

  constructor(private ruter : Router, 
    private AranzmanService: AranzmanService,
    private LokacijaService:LokacijaService )
  {} 
  
  sviAranzmani: Array<Aranzman>;
  filtriraniAranzmani: Array<Aranzman>;
  ulogovanKorisnik: Korisnik;
  lokacije: Array<Number>;
  sveLokacije: Array<Lokacija>;
  skip:number = 0 ;
  limit:number = 50;
  selected = '50';
  brojStranica: number=0;
  stranica:number;


  ngOnInit(): void {  

    this.ulogovanKorisnik = JSON.parse(sessionStorage.getItem('ulogovan'));

    if ( JSON.parse(sessionStorage.getItem('skip')))
      this.skip= JSON.parse(sessionStorage.getItem('skip'));
    if ( JSON.parse(sessionStorage.getItem('limit'))){
      this.limit= JSON.parse(sessionStorage.getItem('limit'));
      this.selected = this.limit.toString();
    }
      

    this.AranzmanService.dohvatiSveAranzmane(this.skip, this.limit).subscribe((data: Aranzman[])=>{
      this.sviAranzmani = this.filtriraniAranzmani = data
    })

    this.AranzmanService.dohvaiBrojAranzmana().subscribe((broj: number)=>{
      this.brojStranica = broj ;
      this.brojStranica = this.brojStranica /  this.limit; 
      if(this.brojStranica *  this.limit < broj) 
      this.brojStranica = this.brojStranica +1;
      this.stranica = this.skip/this.limit;
    })

    this.LokacijaService.dohvatiSveLokacije().subscribe((data: Lokacija[])=>{
      this.sveLokacije  = data;
    })

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  pretraga(){
    console.log("zapoceo pretragu")
    console.log("prevoz je "+this.prevoz);

    var datumPolaskaString="";
    if(this.datumPolaska != null){
      datumPolaskaString = this.datumPolaska.getFullYear() + "-" + 
      (this.datumPolaska.getMonth() + 1 <10 ? '0': '') + (this.datumPolaska.getMonth()+1)+ "-" + 
      (this.datumPolaska.getDate() <10 ? '0': '') + this.datumPolaska.getDate() ;
    } 
    console.log("datum polaska: "+datumPolaskaString);

    var datumPovratkaString ="";
    if(this.datumPovratka != null){
      datumPovratkaString = this.datumPovratka.getFullYear() + "-" + 
      (this.datumPovratka.getMonth() + 1 <10 ? '0': '') + (this.datumPovratka.getMonth()+1)+ "-" + 
      (this.datumPovratka.getDate() <10 ? '0': '') + this.datumPovratka.getDate() ;
    } 
    console.log("datum povraka: "+datumPovratkaString);

    this.AranzmanService.dohvatiAranzmanePretraga(this.skip, this.limit, this.naziv, this.prevoz, datumPolaskaString, datumPovratkaString, this.lokacijeZaPretragu).subscribe((data: Aranzman[])=>{
      console.log("zavrsio pretragu")
      this.filtriraniAranzmani  = data;
    })
    console.log("ode ispod")
  }
 

  naziv: string = '';
  lokacija: string = '';
  kontinent: string = '';
  drzava: string = '';
  prevoz: string = ''
  datumPolaska: Date ;
  datumPovratka: Date;
  lokacijeZaPretragu: Array<number> = [];


  prijava(){
    this.ruter.navigate(['logovanje']);
  }

  registrovanje(){
    this.ruter.navigate(['registrovanje']);
  }

  rezervacije(){
    this.ruter.navigate(['rezervacije']);
  }

  osvezi(){
    window.location.reload();
  }

  dodajAranzman(){
    this.ruter.navigate(['dodajAranzman'])
  }

  prevozi = new FormControl('');

  prevozList: string[] = ['Autobus', 'Avion', 'Krstarenje', 'Voz', 'Samostalni Prevoz'];



  stranicaAranzmana(aranzman){
      sessionStorage.setItem('aranzman', JSON.stringify(aranzman));
      this.ruter.navigate(['aranzman']);
  }

  sledecaStranica(){
    if( this.skip+this.limit < this.brojStranica*this.limit)
    this.skip = this.skip+this.limit; 
    sessionStorage.setItem('limit', JSON.stringify(this.limit));
    sessionStorage.setItem('skip', JSON.stringify(this.skip));
    window.location.reload();
  }

  prethodnaStranica(){
    if ( this.skip > 0 ){
      this.skip = this.skip-this.limit; 
      sessionStorage.setItem('limit', JSON.stringify(this.limit));
      sessionStorage.setItem('skip', JSON.stringify(this.skip));
      window.location.reload();
    }
      
  }

  promeniPrikaz(n){
      
      sessionStorage.setItem('limit', JSON.stringify(n));
      sessionStorage.setItem('skip', JSON.stringify(0));
      
      window.location.reload();
  }
}
