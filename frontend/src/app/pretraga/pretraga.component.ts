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
  naziv: string = '';
  lokacija: string = '';
  kontinent: string = '';
  drzava: string = '';
  prevoz: string = ''
  datumPolaska: Date;
  datumPolaskaString:string='';
  datumPovratka: Date;
  datumPovratkaString: string='';
  lokacijeZaPretragu: Array<number> =new Array();
  prevozi = new FormControl('');


  ngOnInit(): void {  
    this.ulogovanKorisnik = JSON.parse(sessionStorage.getItem('ulogovan'));

    if ( JSON.parse(sessionStorage.getItem('skip')))
      this.skip= JSON.parse(sessionStorage.getItem('skip'));
    if ( JSON.parse(sessionStorage.getItem('limit'))){
      this.limit= JSON.parse(sessionStorage.getItem('limit'));
      this.selected = this.limit.toString();
    }
    if ( JSON.parse(sessionStorage.getItem('naziv')))
      this.naziv= JSON.parse(sessionStorage.getItem('naziv'));
    if ( JSON.parse(sessionStorage.getItem('prevoz')))
      this.prevoz= JSON.parse(sessionStorage.getItem('prevoz'));
    if ( JSON.parse(sessionStorage.getItem('datumPolaskaString'))){
      this.datumPolaskaString= JSON.parse(sessionStorage.getItem('datumPolaskaString'));
      this.datumPolaska=new Date(this.datumPolaskaString);
    }
    if ( JSON.parse(sessionStorage.getItem('datumPovratkaString'))){
      this.datumPovratkaString= JSON.parse(sessionStorage.getItem('datumPovratkaString'));
      this.datumPovratka=new Date(this.datumPovratkaString);
    }  
    if ( JSON.parse(sessionStorage.getItem('lokacijeZaPretragu')))
      this.lokacijeZaPretragu= JSON.parse(sessionStorage.getItem('lokacijeZaPretragu'));
    if ( JSON.parse(sessionStorage.getItem('lokacija')))
      this.lokacija= JSON.parse(sessionStorage.getItem('lokacija'));
    if ( JSON.parse(sessionStorage.getItem('kontinent')))
      this.kontinent= JSON.parse(sessionStorage.getItem('kontinent'));
    if ( JSON.parse(sessionStorage.getItem('drzava')))
      this.drzava= JSON.parse(sessionStorage.getItem('drzava'));

    this.LokacijaService.dohvatiSveLokacije().subscribe((data: Lokacija[])=>{
      this.sveLokacije  = data;
    })

    

    this.LokacijaService.dohvatiLokacijePretraga(this.lokacija, this.drzava ,this.kontinent).subscribe((data: Lokacija[])=>{
      let lokacije  = data;
      var numbers = new Array(); 
      lokacije.forEach(function(lokacija){
        numbers.push(lokacija.id);
      });
      this.lokacijeZaPretragu = numbers;
      if( numbers.length > 0 ){
        this.AranzmanService.dohvaiBrojAranzmana( this.naziv, this.prevoz, this.datumPolaskaString, this.datumPovratkaString, this.lokacijeZaPretragu).subscribe((broj: number)=>{
          this.brojStranica = broj ;
          this.brojStranica = Math.floor(this.brojStranica /  this.limit); 
          if(this.brojStranica *  this.limit < broj) 
            this.brojStranica  = this.brojStranica +1;
          this.stranica = this.skip/this.limit +1;
        })
        
        this.AranzmanService.dohvatiAranzmanePretraga(this.skip, this.limit, this.naziv, this.prevoz, this.datumPolaskaString, this.datumPovratkaString, this.lokacijeZaPretragu).subscribe((data: Aranzman[])=>{
          this.filtriraniAranzmani  = data;
        })
      } else{
        this.filtriraniAranzmani= [];
      }
    })
    
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  pretraga(){
    this.datumPolaskaString="";
    if(this.datumPolaska != null){
      this.datumPolaskaString = this.datumPolaska.getFullYear() + "-" + 
      (this.datumPolaska.getMonth() + 1 <10 ? '0': '') + (this.datumPolaska.getMonth()+1)+ "-" + 
      (this.datumPolaska.getDate() <10 ? '0': '') + this.datumPolaska.getDate() ;
    } 

    this.datumPovratkaString ="";
    if(this.datumPovratka != null){
      this.datumPovratkaString = this.datumPovratka.getFullYear() + "-" + 
      (this.datumPovratka.getMonth() + 1 <10 ? '0': '') + (this.datumPovratka.getMonth()+1)+ "-" + 
      (this.datumPovratka.getDate() <10 ? '0': '') + this.datumPovratka.getDate() ;
    } 

    this.sacuvajParametrePretrage();

    window.location.reload();
  }
 
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

  stranicaAranzmana(aranzman){
    this.sacuvajParametrePretrage();
    sessionStorage.setItem('aranzman', JSON.stringify(aranzman));
    this.ruter.navigate(['aranzman']);
  }

  sledecaStranica(){
    if( this.skip+this.limit < this.brojStranica*this.limit){
      this.sacuvajParametrePretrage();
      this.skip = this.skip+this.limit; 
      sessionStorage.setItem('limit', JSON.stringify(this.limit));
      sessionStorage.setItem('skip', JSON.stringify(this.skip));
      window.location.reload();
    }
  }

  prethodnaStranica(){
    if ( this.skip > 0 ){
      this.sacuvajParametrePretrage();
      this.skip = this.skip-this.limit; 
      sessionStorage.setItem('limit', JSON.stringify(this.limit));
      sessionStorage.setItem('skip', JSON.stringify(this.skip));
      window.location.reload();
    }
  }

  promeniPrikaz(n){
      this.sacuvajParametrePretrage();
      sessionStorage.setItem('limit', JSON.stringify(n));
      sessionStorage.setItem('skip', JSON.stringify(0));
      window.location.reload();
  }

  sacuvajParametrePretrage(){
    sessionStorage.setItem('naziv', JSON.stringify(this.naziv));
    sessionStorage.setItem('prevoz', JSON.stringify(this.prevoz));
    sessionStorage.setItem('datumPolaskaString', JSON.stringify(this.datumPolaskaString));
    sessionStorage.setItem('datumPovratkaString', JSON.stringify(this.datumPovratkaString));
    sessionStorage.setItem('lokacijeZaPretragu', JSON.stringify(this.lokacijeZaPretragu));
    sessionStorage.setItem('lokacija', JSON.stringify(this.lokacija));
    sessionStorage.setItem('kontinent', JSON.stringify(this.kontinent));
    sessionStorage.setItem('drzava', JSON.stringify(this.drzava));
  }

  ukloniFiltere(){
    sessionStorage.clear();
    sessionStorage.setItem('limit', JSON.stringify(this.limit));
    window.location.reload();
  }

  odjava(){
    sessionStorage.clear();
    this.ruter.navigate(['']);
    window.location.reload();
  }

}
