import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AranzmanService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  dohvatiSveAranzmane(skip, limit){
    const podaci={
      skip: skip,
      limit: limit
    }
    return this.http.post(`${this.uri}/aranzman/dohvatiSveAranzmane`, podaci)
  }

  dohvatiAranzmanePretraga(skip, limit, naziv, prevoz, datumPolaska, datumPovratka, lokacije){
    console.log("usao u servis");

    console.log("naziv"+naziv);
        console.log("prevoz"+prevoz);
        if(prevoz == "") prevoz = null;
        if(prevoz == null) console.log("racuna se kao null");
        console.log("datumPolaska"+datumPolaska);
        if(datumPolaska == null) console.log("i datum se racuna kao null")
        console.log("datumPovratka"+datumPovratka);
        console.log("lokacije"+lokacije);
        if(lokacije.length == 0) lokacije = null;
        if(lokacije == null) console.log("lokacije su null");
        

        console.log("skip"+skip);
        console.log("limit"+limit)

    //lokacije slati kao niz
    const podaci={
      skip: skip,
      limit: limit,
      naziv: naziv,
      prevoz: prevoz,
      datumPolaska: datumPolaska,
      datumPovratka: datumPovratka,
      lokacije:lokacije
    }
    return this.http.post(`${this.uri}/aranzman/dohvatiAranzmanePretraga`, podaci)
  }

  dohvaiBrojAranzmana(){
    return this.http.get(`${this.uri}/aranzman/dohvatiBrojAranzmana`)
  }
}
