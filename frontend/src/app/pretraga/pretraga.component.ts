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


    
  }

 

  naziv: string = '';
  lokacija: string = '';
  kontinent: string = '';
  drzava: string = '';
  prevoz: string = ''


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

  prevozList: string[] = ['Autobusom', 'Avionom', 'Krstarenje', 'Vozom', 'Samostalni Prevoz'];



  stranicaAranzmana(aranzman){
      sessionStorage.setItem('aranzman', JSON.stringify(aranzman));
      this.ruter.navigate(['aranzman']);
  }

  sledecaStranica(){
    // if((this.skip+1)*this.limit < this.brojAranzmana ){

    // }
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
