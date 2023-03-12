import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { AranzmanService } from './aranzman.service';
import { Aranzman } from 'src/models/aranzman';

describe('AranzmanService', () => {
  let service: AranzmanService;
  let httpTestingController: HttpTestingController;

  //priprema sve za izvrsavanje it
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});

    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(AranzmanService);
  });

  //posle svake funkcije it proverava da nema http zahteva koji nisu obradjeni
  afterEach(() => {
    httpTestingController.verify();
  });


  it('#dohvatiAranzmanePretraga treba da vrati ocekivane podatke', (done) => {
    const expectedData: Aranzman = {
        id: 0,
        naziv: 'Probni aranzman',
        lokacije: [0],
        prevoz: 'Autobus',
        datumPolaska: new Date("2023-03-20"),
        datumPovratka: new Date("2023-03-24"),
        trajanje: 5,
        opis: "Opis celog putovanja.. ",
        cena: 4000,
        smestaj: [0],
        napomena: "...",
        slika: 'proba.jpg'
    } 

    const skip: Number = 0;
    const limit: Number = 25;
 
    service.dohvatiAranzmanePretraga(skip, limit, expectedData.naziv, expectedData.prevoz, expectedData.datumPolaska, expectedData.datumPovratka, expectedData.lokacije).subscribe(data => {
      //ono sto ocekujemo da bude vraceno je jednako expectedData ->simuliramo prosledjivanje expectedData koristeci flush metodu
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne({method: "POST"});
 
    testRequest.flush(expectedData);
  });



    it('#dohvatiSveAranzmane pravi zahtev za svim aranzmanima', (done) => {

        const skip: Number = 20;
        const limit: Number = 50;
    
        service.dohvatiSveAranzmane(skip, limit).subscribe(data => {
        done();
        });

        const testRequest = httpTestingController.expectOne({method: "POST"});

        expect(testRequest.request.method).toEqual('POST');
    
        testRequest.flush('POST');
    });

    it('#dohvaiBrojAranzmana pravi zahtev za dohvatanje broja aranzmana', (done) => {
        const dataToSend: Aranzman = {
            id: 0,
            naziv: 'Probni aranzman',
            lokacije: [0],
            prevoz: 'Autobus',
            datumPolaska: new Date("2023-03-20"),
            datumPovratka: new Date("2023-03-24"),
            trajanje: 5,
            opis: "Opis celog putovanja.. ",
            cena: 4000,
            smestaj: [0],
            napomena: "...",
            slika: 'proba.jpg'
        } 

        const expectedData: Number = 1;
    
        service.dohvaiBrojAranzmana(dataToSend.naziv, dataToSend.prevoz, dataToSend.datumPolaska, dataToSend.datumPovratka, dataToSend.lokacije).subscribe(data => {
        expect(data).toEqual(1);
        done();
        });

        const testRequest = httpTestingController.expectOne({method: "POST"});
    
        testRequest.flush(1);
    });

    it('#azurirajAranzman pravi odgovarajuci zahtev', (done) => {
        const dataToSend: Aranzman = {
            id: 0,
            naziv: 'Probni aranzman',
            lokacije: [0],
            prevoz: 'Autobus',
            datumPolaska: new Date("2023-03-20"),
            datumPovratka: new Date("2023-03-24"),
            trajanje: 5,
            opis: "Opis celog putovanja.. ",
            cena: 4000,
            smestaj: [0],
            napomena: "...",
            slika: 'proba.jpg'
        } 
        
        const expectedData = {'message': 'ok'};
    
        service.azurirajAranzman(dataToSend, dataToSend.datumPolaska.toISOString().substring(0,10), dataToSend.datumPovratka.toISOString().substring(0,10)).subscribe(data => {
            expect(data).toEqual(expectedData);
            done();
        });

        const testRequest = httpTestingController.expectOne({method: "POST"});
    
        testRequest.flush(expectedData);
    });

    it('#dodajAranzman pravi odgovarajuci zahtev', (done) => {
        const dataToSend: Aranzman = {
            id: 0,
            naziv: 'Probni aranzman',
            lokacije: [0],
            prevoz: 'Autobus',
            datumPolaska: new Date("2023-03-20"),
            datumPovratka: new Date("2023-03-24"),
            trajanje: 5,
            opis: "Opis celog putovanja.. ",
            cena: 4000,
            smestaj: [0],
            napomena: "...",
            slika: 'proba.jpg'
        } 
        
        const expectedData = {'message': 'ok'};
    
        service.dodajAranzman(dataToSend, dataToSend.datumPolaska.toISOString().substring(0,10), dataToSend.datumPovratka.toISOString().substring(0,10)).subscribe(data => {
            expect(data).toEqual(expectedData);
            done();
        });

        const testRequest = httpTestingController.expectOne({method: "POST"});
    
        testRequest.flush(expectedData);
    });
    
});
