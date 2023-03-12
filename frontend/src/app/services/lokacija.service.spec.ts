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

    const expectedData = {'message':'ok'};
 
    service.dodajLokaciju(dataToSend).subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne("POST: http://localhost:4000/lokacija/dodajLokaciju");

    expect(testRequest.request.method).toEqual('GET');
 
    testRequest.flush(expectedData);
  });

});
