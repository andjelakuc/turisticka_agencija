import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from 'src/models/korisnik';
import { KorisnikService } from '../services/korisnik.service';

@Component({
  selector: 'app-logovanje',
  templateUrl: './logovanje.component.html',
  styleUrls: ['./logovanje.component.css']
})
export class LogovanjeComponent implements OnInit {

  constructor(
    private ruter : Router, 
    private korisnikServis: KorisnikService
  ) { }

  ngOnInit(): void {
  }

  korisnickoIme: string;
  lozinka: string;
  message: string;

  prijava(){
    this.korisnikServis.prijavaNaSistem(this.korisnickoIme, this.lozinka).subscribe((kor: Korisnik)=>{
      
      if(kor){
        sessionStorage.setItem('ulogovan', JSON.stringify(kor));
        this.ruter.navigate([''])
        
      }
      else{   
        this.message = 'Pogresno uneti podaci'
      }    
    })
  }

}
