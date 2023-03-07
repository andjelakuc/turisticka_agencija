import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RezervacijaService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  dodajRezervaciju(rezervacija){
    const data={
        naziv: rezervacija.naziv,
        ime:rezervacija.ime,
        prezime: rezervacija.prezime,
        telefon: rezervacija.telefon,
        email: rezervacija.email,
        nacinPlacanja: rezervacija.nacinPlacanja,
        brojOdraslih: rezervacija.brojOdraslih,
        brojDece: rezervacija.brojDece,
        komentar: rezervacija.komentar,
        status: rezervacija.status,
    }

    return this.http.post(`${this.uri}/rezervacija/dodajRezervaciju`, data);

  }
}
