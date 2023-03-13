import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { LokacijaService } from './lokacija.service';
import { Lokacija } from 'src/models/lokacija';

describe('LokacijaService', () => {
  let service: LokacijaService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});

    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(LokacijaService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('#dohvatiLokaciju pravi odgovarajuc zahtev', (done) => {
    const expectedData: Lokacija = {
        id: 0,
        naziv: 'Probna lokacija',
        drzava: 'Probna drzava',
        kontinent: 'Probni kontinent',
        fotografija:  ['probnaSlika1,jpg','probnaSlika2.jpg']
    } 
 
    service.dohvatiLokaciju(expectedData.id).subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne({method: "POST"});
 
    testRequest.flush(expectedData);

    expect(testRequest.request.body.id).toEqual(expectedData.id);
  });

  it('#dohvatiSveLokacije pravi odgovarajuc zahtev', (done) => {
    const expectedData: Lokacija[] = [{
        id: 0,
        naziv: 'Probna lokacija',
        drzava: 'Probna drzava',
        kontinent: 'Probni kontinent',
        fotografija:  ['probnaSlika1,jpg','probnaSlika2.jpg']
    }]
 
    service.dohvatiSveLokacije().subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne("http://localhost:4000/lokacija/dohvatiSveLokacije");

    expect(testRequest.request.method).toEqual('GET');
 
    testRequest.flush(expectedData);
  });

  it('#dodajLokaciju pravi odgovarajuc zahtev', (done) => {
    const dataToSend: Lokacija = {
        id: 0,
        naziv: 'Probna lokacija',
        drzava: 'Probna drzava',
        kontinent: 'Probni kontinent',
        fotografija:  ['probnaSlika1,jpg','probnaSlika2.jpg']
    }

    const expectedData = {'message':'ok'}
 
    service.dodajLokaciju(dataToSend).subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne({method: 'POST'});

    testRequest.flush(expectedData);

    expect(testRequest.request.body.naziv).toEqual(dataToSend.naziv);
    expect(testRequest.request.body.drzava).toEqual(dataToSend.drzava);
    expect(testRequest.request.body.kontinent).toEqual(dataToSend.kontinent);
    expect(testRequest.request.body.fotografija).toEqual(dataToSend.fotografija);
  });

  it('#dohvatiLokacijePretraga pravi odgovarajuc zahtev', (done) => {
    const dataToSend: Lokacija = {
        id: 0,
        naziv: 'Probna lokacija',
        drzava: 'Probna drzava',
        kontinent: 'Probni kontinent',
        fotografija:  ['probnaSlika1,jpg','probnaSlika2.jpg']
    }

    const expectedData = {'message':'ok'}
 
    service.dohvatiLokacijePretraga(dataToSend.naziv, dataToSend.drzava, dataToSend.kontinent).subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne({method: 'POST'});

    testRequest.flush(expectedData);

    expect(testRequest.request.body.naziv).toEqual(dataToSend.naziv);
    expect(testRequest.request.body.drzava).toEqual(dataToSend.drzava);
    expect(testRequest.request.body.kontinent).toEqual(dataToSend.kontinent);
  });
});
