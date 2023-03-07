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

  dohvaiBrojAranzmana(){
    return this.http.get(`${this.uri}/aranzman/dohvatiBrojAranzmana`)
  }
}
