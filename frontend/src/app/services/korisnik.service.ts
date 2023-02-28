import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private http: HttpClient) { }

  uri='http://localhost:4000'

  prijavaNaSistem(korisnickoIme, lozinka){
    
    const podaci={
      korisnickoIme: korisnickoIme,
      lozinka: lozinka
    }

    return this.http.post(`${this.uri}/korisnici/prijavaNaSistem`, podaci);
  }

  dodajKorisnika(korisnik){

    const data={
      korisnickoIme: korisnik.korisnickoIme,
      lozinka: korisnik.lozinka,
      privilegija: korisnik.privilegija
    }

    return this.http.post(`${this.uri}/korisnici/dodajKorisnika`, data);
  }



}
