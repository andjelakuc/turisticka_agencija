import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SmestajService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  dohvatiSmestaj(id){
    
    const podaci={
      id: id
    }

    return this.http.post(`${this.uri}/smestaj/dohvatiSmestaj`, podaci);
  }


  dodajSmestaj(smestaj){
    const data={
      id: smestaj.id,
      ime: smestaj.ime,
      tip: smestaj.tip,
      kategorija:smestaj.kategorija,
      internet: smestaj.internet,
      tv: smestaj.tv,
      ac: smestaj.ac,
      frizider: smestaj.frizider,
      sef: smestaj.sef,
      fotografije: smestaj.fotografije
    }

    return this.http.post(`${this.uri}/smestaj/dodajSmestaj`, data);

  }
}
