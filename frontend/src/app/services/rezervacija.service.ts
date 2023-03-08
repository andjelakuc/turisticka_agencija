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
        nazivAranzmana: rezervacija.nazivAranzmana,
        ime:rezervacija.ime,
        prezime: rezervacija.prezime,
        telefon: rezervacija.telefon,
        email: rezervacija.email,
        nacinPlacanja: rezervacija.nacinPlacanja,
        brojOdraslih: rezervacija.brojOdraslih,
        brojDece: rezervacija.brojDece,
        komentar: rezervacija.komentar,
        status: "obrada",
    }

    return this.http.post(`${this.uri}/rezervacija/dodajRezervaciju`, data);

  }

  dohvatiSveRezervacije(){
    return this.http.get(`${this.uri}/rezervacija/dohvatiSveRezervacije`);
  }

  prihvatiRezervaciju(idx){
    const data={
      id: idx,
      status: "prihvacena"
    }
    return this.http.post(`${this.uri}/rezervacija/azurirajRezervaciju`, data);
  }

  odbiRezervaciju(idx){
    const data={
      id: idx,
      status: "odbijena"
    }
    return this.http.post(`${this.uri}/rezervacija/azurirajRezervaciju`, data);
  }
}
