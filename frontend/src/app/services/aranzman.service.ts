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

    if(lokacije.length == 0) lokacije = null;

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

  dohvaiBrojAranzmana(naziv, prevoz, datumPolaska, datumPovratka, lokacije){
    const podaci={
      naziv: naziv,
      prevoz: prevoz,
      datumPolaska: datumPolaska,
      datumPovratka: datumPovratka,
      lokacije:lokacije
    }
    return this.http.post(`${this.uri}/aranzman/dohvatiBrojAranzmana`,podaci)
  }

  azurirajAranzman(aranzman, datumPolaskaString, datumPovratkaString){
    const podaci={
      id: aranzman.id,
      naziv: aranzman.naziv,
      lokacije: aranzman.lokacije,
      prevoz: aranzman.prevoz,
      datumPolaska: datumPolaskaString,
      datumPovratka: datumPovratkaString,
      trajanje: aranzman.trajanje,
      opis: aranzman.opis,
      cena: aranzman.cena,
      smestaj:aranzman.smestaj,
      napomena: aranzman.napomena, 
      slika: aranzman.slika
    }
    return this.http.post(`${this.uri}/aranzman/azurirajAranzman`,podaci)
  }

  dodajAranzman(aranzman, datumPolaskaString, datumPovratkaString){

    const podaci={
      id: aranzman.id,
      naziv: aranzman.naziv,
      lokacije: aranzman.lokacije,
      prevoz: aranzman.prevoz,
      datumPolaska: datumPolaskaString,
      datumPovratka: datumPovratkaString,
      trajanje: aranzman.trajanje,
      opis: aranzman.opis,
      cena: aranzman.cena,
      smestaj:aranzman.smestaj,
      napomena: aranzman.napomena, 
      slika: aranzman.slika
    }
    return this.http.post(`${this.uri}/aranzman/dodajAranzman`,podaci)
  }


  obrisiAranzman(idAranzmana){
    const podaci={
      id: idAranzmana
    }

    return this.http.post(`${this.uri}/aranzman/obrisiAranzman`,podaci)
  }
}
