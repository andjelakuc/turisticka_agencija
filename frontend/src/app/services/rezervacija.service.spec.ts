import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { RezervacijaService } from './rezervacija.service';
import { Rezervacija } from 'src/models/rezervacija';

describe('RezervacijaService', () => {
  let service: RezervacijaService;

  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});

    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(RezervacijaService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('#dodajRezervaciju pravi odgovarajuc zahtev', (done) => {
    const dataToSend: Rezervacija = {
        id: 0,
        nazivAranzmana : "Sutomore",
        ime: "Ana",
        prezime: "Ivanovic",
        telefon: "+3816412345678",
        email: "anaivanovic@gmail.com",
        nacinPlacanja : "kes",
        brojOdraslih : "2",
        brojDece : "0",
        komentar : "",
        status : "obrada"
    } 

    const expectedData = {'message':'ok'};
 
    service.dodajRezervaciju(dataToSend).subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne({method: "POST"});
 
    testRequest.flush(expectedData);
    expect(testRequest.request.body.nazivAranzmana).toEqual(dataToSend.nazivAranzmana);
    expect(testRequest.request.body.ime).toEqual(dataToSend.ime);
    expect(testRequest.request.body.prezime).toEqual(dataToSend.prezime);
    expect(testRequest.request.body.telefon).toEqual(dataToSend.telefon);
    expect(testRequest.request.body.email).toEqual(dataToSend.email);
    expect(testRequest.request.body.nacinPlacanja).toEqual(dataToSend.nacinPlacanja);
    expect(testRequest.request.body.brojOdraslih).toEqual(dataToSend.brojOdraslih);
    expect(testRequest.request.body.brojDece).toEqual(dataToSend.brojDece);
    expect(testRequest.request.body.komentar).toEqual(dataToSend.komentar);
    expect(testRequest.request.body.status).toEqual(dataToSend.status);
  });
  
  it('#dohvatiSveRezervacije pravi odgovarajuc zahtev', (done) => {
    const expectedData: Rezervacija[] = [{
        id: 0,
        nazivAranzmana : "Sutomore",
        ime: "Ana",
        prezime: "Ivanovic",
        telefon: "+3816412345678",
        email: "anaivanovic@gmail.com",
        nacinPlacanja : "kes",
        brojOdraslih : "2",
        brojDece : "0",
        komentar : "",
        status : "obrada"
    }] 
 
    service.dohvatiSveRezervacije().subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne("http://localhost:4000/rezervacija/dohvatiSveRezervacije");

    expect(testRequest.request.method).toEqual('GET');
 
    testRequest.flush(expectedData);
  });

  it('#prihvatiRezervaciju pravi odgovarajuc zahtev', (done) => {
    const dataToSend: Rezervacija = {
        id: 0,
        nazivAranzmana : "Sutomore",
        ime: "Ana",
        prezime: "Ivanovic",
        telefon: "+3816412345678",
        email: "anaivanovic@gmail.com",
        nacinPlacanja : "kes",
        brojOdraslih : "2",
        brojDece : "0",
        komentar : "",
        status : "obrada"
    } 

    const expectedData = {'message':'ok'};
    const expectedStatus = 'prihvacena'
 
    service.prihvatiRezervaciju(dataToSend.id).subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne({method: "POST"});
 
    testRequest.flush(expectedData);
    expect(testRequest.request.body.id).toEqual(dataToSend.id);
    expect(testRequest.request.body.status).toEqual(expectedStatus);
  });

  it('#odbiRezervaciju pravi odgovarajuc zahtev', (done) => {
    const dataToSend: Rezervacija = {
        id: 0,
        nazivAranzmana : "Sutomore",
        ime: "Ana",
        prezime: "Ivanovic",
        telefon: "+3816412345678",
        email: "anaivanovic@gmail.com",
        nacinPlacanja : "kes",
        brojOdraslih : "2",
        brojDece : "0",
        komentar : "",
        status : "obrada"
    } 

    const expectedData = {'message':'ok'};
    const expectedStatus = 'odbijena'
 
    service.odbiRezervaciju(dataToSend.id).subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne({method: "POST"});
 
    testRequest.flush(expectedData);
    expect(testRequest.request.body.id).toEqual(dataToSend.id);
    expect(testRequest.request.body.status).toEqual(expectedStatus);
  });
  
});
