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
  selector: 'app-dodaj-aranzman',
  templateUrl: './dodaj-aranzman.component.html',
  styleUrls: ['./dodaj-aranzman.component.css']
})
export class DodajAranzmanComponent implements OnInit {

  constructor(private ruter : Router, private SmestajService :SmestajService, private LokacijaService:LokacijaService, private AranzmanService:AranzmanService) { }
  ulogovanKorisnik: Korisnik;
  aranzman: Aranzman = new Aranzman();
  smestaj: Smestaj= new Smestaj();
  sveLokacije: Array<Lokacija>;
  lokacije =  new FormControl('');
  sviSmestaji: Array<Smestaj>;
  novSmesaj =  new FormControl('');
  nizLokacija:  Array<Lokacija>;
  datumPolaska: Date;
  datumPovratka: Date;

  ngOnInit(): void {
    this.ulogovanKorisnik = JSON.parse(sessionStorage.getItem('ulogovan'));
    this.datumPolaska= new Date(this.aranzman.datumPolaska);
    this.datumPovratka= new Date(this.aranzman.datumPovratka);
    
    this.LokacijaService.dohvatiSveLokacije().subscribe((data: Lokacija[])=>{
      this.sveLokacije  = data;
    })

    this.SmestajService.dohvatiSveSmestaje().subscribe((data: Smestaj[])=>{
      this.sviSmestaji  = data;
      this.smestaj = this.sviSmestaji[0];
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

  dodaj(){
    var numbers = new Array(); 
      numbers.forEach(lokacija => {
        numbers.push(lokacija.id);
      });
      if(numbers.length != 0){
        this.aranzman.lokacije = numbers;
        this.AranzmanService.dodajAranzman(this.aranzman, this.datumPolaska, this.datumPovratka).subscribe((resp)=>{
          if ( resp['message'] === 'ok') {
            alert("Uspesno ste dodali aranzman");
            this.ruter.navigate(['']);
        }
    });
  }
  }

  odjava(){
    sessionStorage.clear();
    this.ruter.navigate(['']);
  }

  promeniSmestaj(id){
    this.SmestajService.dohvatiSmestaj(id).subscribe((data: Smestaj)=>{
      this.smestaj = data;
    })
  }
}
