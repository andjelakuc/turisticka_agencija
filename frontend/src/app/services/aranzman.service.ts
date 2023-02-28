import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AranzmanService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  dohvatiSveAranzmane(){
    return this.http.get(`${this.uri}/aranzman/dohvatiSveAranzmane`)
  }
}
