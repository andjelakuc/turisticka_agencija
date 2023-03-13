import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { SmestajService } from './smestaj.service';
import { Smestaj } from 'src/models/smestaj';

describe('SmestajService', () => {
  let service: SmestajService;

  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});

    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(SmestajService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('#dohvatiSmestaj pravi odgovarajuc zahtev', (done) => {
    const expectedData: Smestaj = {
        id: 0,
        idLokacije: 0,
        ime:  "Proba smestaj",
        tip:  "1/2",
        kategorija: 3,
        internet: true,
        tv: false,
        ac: true,
        frizider: false,
        sef: false,
        fotografije: ['probaSlika1.jpg', 'probaSlika2.png']
    } 
 
    service.dohvatiSmestaj(expectedData.id).subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne({method: "POST"});
 
    testRequest.flush(expectedData);

    expect(testRequest.request.body.id).toEqual(expectedData.id);
  });

  it('#dohvatiSveSmestaje pravi odgovarajuc zahtev', (done) => {
    const expectedData: Smestaj [] = [{
        id: 0,
        idLokacije: 0,
        ime:  "Proba smestaj",
        tip:  "1/2",
        kategorija: 3,
        internet: true,
        tv: false,
        ac: true,
        frizider: false,
        sef: false,
        fotografije: ['probaSlika1.jpg', 'probaSlika2.png']
    }]
 
    service.dohvatiSveSmestaje().subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne('http://localhost:4000/smestaj/dohvatiSveSmestaje');

    expect(testRequest.request.method).toEqual('GET');
 
    testRequest.flush(expectedData);
  });

  it('#dodajSmestaj pravi odgovarajuc zahtev', (done) => {
    const dataToSend: Smestaj  = {
        id: 0,
        idLokacije: 0,
        ime:  "Proba smestaj",
        tip:  "1/2",
        kategorija: 3,
        internet: true,
        tv: false,
        ac: true,
        frizider: false,
        sef: false,
        fotografije: ['probaSlika1.jpg', 'probaSlika2.png']
    }

    const expectedData = {'message': 'ok'};
 
    service.dodajSmestaj(dataToSend).subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne({method: "POST"});
 
    testRequest.flush(expectedData);

    expect(testRequest.request.body.idLokacije).toEqual(dataToSend.idLokacije);
    expect(testRequest.request.body.ime).toEqual(dataToSend.ime);
    expect(testRequest.request.body.tip).toEqual(dataToSend.tip);
    expect(testRequest.request.body.idLokacije).toEqual(dataToSend.idLokacije);
    expect(testRequest.request.body.kategorija).toEqual(dataToSend.kategorija);
    expect(testRequest.request.body.internet).toEqual(dataToSend.internet);
    expect(testRequest.request.body.tv).toEqual(dataToSend.tv);
    expect(testRequest.request.body.ac).toEqual(dataToSend.ac);
    expect(testRequest.request.body.frizider).toEqual(dataToSend.frizider);
    expect(testRequest.request.body.sef).toEqual(dataToSend.sef);
    expect(testRequest.request.body.fotografije).toEqual(dataToSend.fotografije);
  });
  
});
