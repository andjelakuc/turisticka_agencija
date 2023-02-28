import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { Aranzman } from 'src/models/aranzman';
import { Korisnik } from 'src/models/korisnik';
import { AranzmanService } from '../services/aranzman.service';


@Component({
  selector: 'app-pretraga',
  templateUrl: './pretraga.component.html',
  styleUrls: ['./pretraga.component.css']
})
export class PretragaComponent implements OnInit {

  constructor(private ruter : Router, 
    private AranzmanService: AranzmanService )
  {} 
  
  sviAranzmani: Array<Aranzman>;
  filtriraniAranzmani: Array<Aranzman>;
  ulogovanKorisnik: Korisnik;

  ngOnInit(): void {

    this.ulogovanKorisnik = JSON.parse(sessionStorage.getItem('ulogovan'));

    this.AranzmanService.dohvatiSveAranzmane().subscribe((data: Aranzman[])=>{
      this.sviAranzmani = this.filtriraniAranzmani = data;
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
}
