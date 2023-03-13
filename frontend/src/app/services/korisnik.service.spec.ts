import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { KorisnikService } from './korisnik.service';
import { Korisnik } from 'src/models/korisnik';

describe('KorisnikService', () => {
  let service: KorisnikService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});

    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(KorisnikService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });


  it('#prijavaNaSistem pravi odgovarajuc zahtev', (done) => {
    const expectedData: Korisnik = {
        korisnickoIme: "andjelakuc",
        lozinka: "pass111",
        privilegija: "admin"
    } 
 
    service.prijavaNaSistem(expectedData.korisnickoIme, expectedData.lozinka).subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne({method: "POST"});
 
    testRequest.flush(expectedData);

    expect(testRequest.request.body.lozinka).toEqual(expectedData.lozinka);
    expect(testRequest.request.body.korisnickoIme).toEqual(expectedData.korisnickoIme);
  });

  it('#dodajKorisnika pravi odgovarajuc zahtev', (done) => {
    const dataToSend: Korisnik = {
        korisnickoIme: "andjelakuc",
        lozinka: "pass111",
        privilegija: "admin"
    } 

    const expectedData = {'message': 'ok'}
 
    service.dodajKorisnika(dataToSend).subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne({method: "POST"});
 
    testRequest.flush(expectedData);
    expect(testRequest.request.body).toEqual(dataToSend);
  });
});
