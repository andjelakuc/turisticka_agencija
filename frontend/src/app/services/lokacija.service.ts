import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LokacijaService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  dohvatiLokaciju(id){
    
    const podaci={
      id: id
    }

    return this.http.post(`${this.uri}/lokacija/dohvatiLokaciju`, podaci);
  }

  dohvatiSveLokacije(){
    return this.http.get(`${this.uri}/lokacija/dohvatiSveLokacije`)
  }


  dodajLokaciju(lokacija){
    const data={
      naziv: lokacija.naziv,
      drzava: lokacija.drzava,
      kontinent: lokacija.kontinent,
      fotografija:lokacija.fotografija
    }

    return this.http.post(`${this.uri}/lokacija/dodajLokaciju`, data);

  }


  dohvatiLokacijePretraga(Naziv, Drzava, Kontinent){
    const data={
      naziv: Naziv,
      drzava: Drzava,
      kontinent: Kontinent
    }

    return this.http.post(`${this.uri}/lokacija/dohvatiLokacijePretraga`, data);
  }
}
