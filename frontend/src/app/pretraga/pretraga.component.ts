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
  skip:number;
  limit:number;
  brojAranzmana: Number=0;


  ngOnInit(): void {  

    this.ulogovanKorisnik = JSON.parse(sessionStorage.getItem('ulogovan'));
    this.skip= 0;
    this.limit=50
    this.AranzmanService.dohvatiSveAranzmane(this.skip, this.limit).subscribe((data: Aranzman[])=>{
      this.sviAranzmani = this.filtriraniAranzmani = data;
    })


    
    this.LokacijaService.dohvatiSveLokacije().subscribe((data: Lokacija[])=>{
      this.sveLokacije  = data;
    })


    this.AranzmanService.dohvaiBrojAranzmana().subscribe((broj: Number)=>{
      this.brojAranzmana=broj;
      alert(this.brojAranzmana);
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
    this.skip = (this.skip+1)*this.limit; 
  }

  prethodnaStranica(){
    if ( this.skip > 0 )
      this.skip = (this.skip+1)*this.limit; 
  }

  promeniPrikaz(n){

  }
}
