import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Aranzman } from 'src/models/aranzman';
import { Korisnik } from 'src/models/korisnik';
import { Lokacija } from 'src/models/lokacija';
import { Smestaj } from 'src/models/smestaj';
import { AranzmanService } from '../services/aranzman.service';
import { LokacijaService } from '../services/lokacija.service';
import { SmestajService } from '../services/smestaj.service';

@Component({
  selector: 'app-azuriraj-aranzman',
  templateUrl: './azuriraj-aranzman.component.html',
  styleUrls: ['./azuriraj-aranzman.component.css']
})
export class AzurirajAranzmanComponent implements OnInit {

  constructor(private ruter : Router, private SmestajService :SmestajService, private LokacijaService:LokacijaService, private AranzmanService:AranzmanService) { }
  ulogovanKorisnik: Korisnik;
  aranzman: Aranzman;
  smestaj: Smestaj;
  sveLokacije: Array<Lokacija>;
  lokacije =  new FormControl('');
  sviSmestaji: Array<Smestaj>;
  novSmesaj =  new FormControl('');
  nizLokacija:  Array<Lokacija>;
  datumPolaska: Date;
  datumPovratka: Date;

  ngOnInit(): void {
    this.ulogovanKorisnik = JSON.parse(sessionStorage.getItem('ulogovan'));
    this.aranzman = JSON.parse(sessionStorage.getItem('aranzman'));
    this.ulogovanKorisnik = JSON.parse(sessionStorage.getItem('ulogovan'));
    this.aranzman = JSON.parse(sessionStorage.getItem('aranzman'));
    this.datumPolaska= new Date(this.aranzman.datumPolaska);
    this.datumPovratka= new Date(this.aranzman.datumPovratka);
    
    this.SmestajService.dohvatiSmestaj(this.aranzman.smestaj[0]).subscribe((data: Smestaj)=>{
      this.smestaj = data;
      console.log(data);
    })

    this.LokacijaService.dohvatiSveLokacije().subscribe((data: Lokacija[])=>{
      this.sveLokacije  = data;
    })

    this.SmestajService.dohvatiSveSmestaje().subscribe((data: Smestaj[])=>{
      this.sviSmestaji  = data;
    })
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.aranzman.slika = e.target.result;
      };
      reader.readAsDataURL(inputNode.files[0]);
    }
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

  promeniSmestaj(id){
    this.SmestajService.dohvatiSmestaj(id).subscribe((data: Smestaj)=>{
      this.smestaj = data;
    })
  }

  sacuvaj(){  
    var datumPolaskaString="";
    if(this.datumPolaska != null){
      datumPolaskaString = this.datumPolaska.getFullYear() + "-" + 
      (this.datumPolaska.getMonth() + 1 <10 ? '0': '') + (this.datumPolaska.getMonth()+1)+ "-" + 
      (this.datumPolaska.getDate() <10 ? '0': '') + this.datumPolaska.getDate() ;
    } 

    var datumPovratkaString ="";
    if(this.datumPovratka != null){
      datumPovratkaString = this.datumPovratka.getFullYear() + "-" + 
      (this.datumPovratka.getMonth() + 1 <10 ? '0': '') + (this.datumPovratka.getMonth()+1)+ "-" + 
      (this.datumPovratka.getDate() <10 ? '0': '') + this.datumPovratka.getDate() ;
    } 

    this.aranzman.smestaj[0] = this.smestaj.id;
    var numbers = new Array(); 
      numbers.forEach(lokacija => {
        numbers.push(lokacija.id);
      });
      this.aranzman.lokacije = numbers;
    this.AranzmanService.azurirajAranzman(this.aranzman, datumPolaskaString, datumPovratkaString).subscribe((resp)=>{
      if ( resp['message'] === 'ok') {
          alert("Uspesno ste azurirali aranzam");
          this.ruter.navigate(['']);
      }
    });
  }

  otkazi(){
    this.ruter.navigate(['aranzman']);
  }
}
