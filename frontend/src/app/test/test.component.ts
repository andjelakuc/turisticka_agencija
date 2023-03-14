import { Component, OnInit } from '@angular/core';
import { Aranzman } from 'src/models/aranzman';
import { Korisnik } from 'src/models/korisnik';
import { Lokacija } from 'src/models/lokacija';
import { Rezervacija } from 'src/models/rezervacija';
import { AranzmanService } from '../services/aranzman.service';
import { KorisnikService } from '../services/korisnik.service';
import { LokacijaService } from '../services/lokacija.service';
import { RezervacijaService } from '../services/rezervacija.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private AranzmanService:AranzmanService, private KorisnikService:KorisnikService, private LokacijaService:LokacijaService, private rezervacijaService:RezervacijaService) { }

  
  brojAranzmanaTest:string;

  nePostojiAranzmanTest: string;

  dodaAranzmanTest: string;
  dodaAranzmanTestNaziv: string;
  dodaAranzmanTestCena: string;
  dodaAranzmanTestDatumPolaska: string;
  dodaAranzmanTestDatumPovratka: string;

  azurirajTest:string;
  azurirajNaziv1:string;
  azurirajDatumPolaska1: string;
  azurirajDatumPovratka1: string;

  testBrisanjaAranzmana: string;

  ubacenAranzman: Aranzman;

  nePostojiKorisnik:string ='';
  PostojiKorisnik:string ='';
  novKorisnik: string= '';
  novKorisnikKOjiVecPostoji: string = '';

  pretragaLokacijePostoji: string='';
  pretragaLokacijeNePostoji: string='';

  dodataRezervacija: string = '';

  
  ngOnInit(): void {
    
    //......ARANZMAN....... 
    this.AranzmanService.dohvaiBrojAranzmana("","","","",null).subscribe((broj: number)=>{
      if(broj == 60000)
          this.brojAranzmanaTest="Uspesno provereno da ima 60000 aranzmana";
      else{
        this.brojAranzmanaTest="Test nije prosao jer je broj aranzmana " + broj;
      }

      this.AranzmanService.dohvatiAranzmanePretraga(0,50,"Probni aranzman", "", "", "", []).subscribe((aranzman: Aranzman[])=>{
        if(aranzman.length == 0){
          this.nePostojiAranzmanTest = "Uspešno provereno da aranžman sa nazivom 'Probni aranzman' još nije dodat u bazu";
        }
        else{
          this.nePostojiAranzmanTest = "Test nije prošao jer je aranžman " + aranzman[0].naziv ;
        }

        
        var datumPolaskaString = "2023-03-14";
        var datumPovratkaString = "2023-03-15";

        var ProbniAranzman =new Aranzman();
        ProbniAranzman.naziv= "Probni aranzman";
        ProbniAranzman.cena= 100;
        ProbniAranzman.lokacije = [ 1,2];
        ProbniAranzman.datumPolaska = new Date(datumPolaskaString);
        ProbniAranzman.datumPovratka = new Date(datumPovratkaString);
        ProbniAranzman.napomena = "Napomena";
        ProbniAranzman.opis = "opis";
        ProbniAranzman.prevoz = "Avion"
        ProbniAranzman.slika =  "../assets/smestaj" + 3 + ".jpg";
        ProbniAranzman.smestaj = [1];

        this.AranzmanService.dodajAranzman(ProbniAranzman, datumPolaskaString, datumPovratkaString).subscribe((resp)=>{
          if ( resp['message'] === 'ok') {
            this.AranzmanService.dohvatiAranzmanePretraga(0,50,"Probni aranzman", "Avion", "2023-03-14", "2023-03-15", [1]).subscribe((aranzmani: Aranzman[])=>{
              if(aranzmani.length != 0){
                this.ubacenAranzman = aranzmani[0];
                //provera naziva
                this.dodaAranzmanTestNaziv = "Naziv: " + ProbniAranzman.naziv + " : " + this.ubacenAranzman.naziv ;
                if (ProbniAranzman.naziv == this.ubacenAranzman.naziv) {
                  this.dodaAranzmanTestNaziv += " :Tacno\r"
                  //provera cene
                  this.dodaAranzmanTestCena = "Cena: " + ProbniAranzman.cena + " : " + this.ubacenAranzman.cena ;
                  if (ProbniAranzman.cena == this.ubacenAranzman.cena) {
                    this.dodaAranzmanTestCena += " :Tacno\r"
                    //provera datuma polaska
                    this.dodaAranzmanTestDatumPolaska = "Datum polaska: " + datumPolaskaString + " : " + this.ubacenAranzman.datumPolaska ;
                    if (datumPolaskaString == new Date(this.ubacenAranzman.datumPolaska).toISOString().substring(0,10)) {
                      this.dodaAranzmanTestDatumPolaska += " :Tacno\r"
                      //provera datuma povratka
                      this.dodaAranzmanTestDatumPovratka = "Datum povratka: " + datumPovratkaString + " : " + this.ubacenAranzman.datumPovratka ;
                      if (datumPovratkaString == new Date(this.ubacenAranzman.datumPovratka).toISOString().substring(0,10)) {
                        this.dodaAranzmanTestDatumPovratka += " :Tacno\r"
                        //finalna poruka
                        this.dodaAranzmanTest = "Aranzman je uspesno dodat u bazu";
                      }
                      else {
                        this.dodaAranzmanTestDatumPovratka += " :Netacno\r";
                        this.dodaAranzmanTest =  "Test nije prošao jer datum povratka " + ProbniAranzman.datumPovratka + " nije dodat ispravno u bazu";
                      }
                    }
                    else {
                      this.dodaAranzmanTestDatumPolaska += " :Netacno\r";
                      this.dodaAranzmanTest =  "Test nije prošao jer datum polaska " + ProbniAranzman.datumPolaska + " nije dodat ispravno u bazu";
                }
                  }
                  else {
                    this.dodaAranzmanTestCena += " :Netacno\r";
                    this.dodaAranzmanTest =  "Test nije prošao jer cena " + ProbniAranzman.cena + " nije dodata ispravno u bazu";
                  }
                }
                else {
                  this.dodaAranzmanTestNaziv += " :Netacno\r";
                  this.dodaAranzmanTest =  "Test nije prošao jer aranžman " + ProbniAranzman.naziv + " nije dodat ispravno u bazu";
                }
    
              }
              else{
                this.dodaAranzmanTest =  "Test nije prošao jer aranžman " + ProbniAranzman + " nije dodat u bazu";
              }

              //Testiranje azuriranja - promena datuma
              var OcekivaniAranzman = this.ubacenAranzman;
              OcekivaniAranzman.datumPolaska = new Date("2023-03-15");
              OcekivaniAranzman.datumPovratka = new Date("2023-03-18");
              datumPolaskaString = "2023-03-15"
              datumPovratkaString = "2023-03-18"
              
              this.AranzmanService.azurirajAranzman(this.ubacenAranzman, "2023-03-15", "2023-03-18").subscribe((resp)=>{
                if ( resp['message'] === 'ok') {
                    //this.azurirajTest = "Aranzman je azuriran";
                    this.AranzmanService.dohvatiAranzmanePretraga(0,50,"Probni aranzman", "Avion", "2023-03-15", "2023-03-18", [1]).subscribe((aranzmani: Aranzman[])=>{
                      if(aranzmani.length != 0){
                        this.ubacenAranzman = aranzmani[0];
                        
                        //provera naziva
                        this.azurirajNaziv1 = "Naziv: " + OcekivaniAranzman.naziv + " : " + this.ubacenAranzman.naziv ;
                        if (OcekivaniAranzman.naziv == this.ubacenAranzman.naziv) {
                          this.azurirajNaziv1 += " :Tacno\r"

                          //provera datuma polaska
                          this.azurirajDatumPolaska1 = "Datum polaska: " + datumPolaskaString + " : " + this.ubacenAranzman.datumPolaska;
                          if (datumPolaskaString == new Date(this.ubacenAranzman.datumPolaska).toISOString().substring(0,10)) {
                            this.azurirajDatumPolaska1 += " :Tacno\r"

                            //provera datuma povratka
                            this.azurirajDatumPovratka1 = "Datum povratka: " + datumPovratkaString +" : " + this.ubacenAranzman.datumPovratka ;
                            if (datumPovratkaString == new Date(this.ubacenAranzman.datumPovratka).toISOString().substring(0,10)){ 
                              this.azurirajDatumPovratka1 += " :Tacno\r"
                              //kraj provere
                              this.azurirajTest = "Azuriranje je uspesno izvrseno";
                            }
                            else {
                              this.azurirajDatumPovratka1 += " :Netacno\r";
                              this.azurirajTest =  "Test nije prošao jer datum povratka " + OcekivaniAranzman.datumPovratka + " nije ispravno azuriran";
                            }
                          }
                          else {
                            this.azurirajDatumPolaska1 += " :Netacno\r";
                            this.azurirajTest =  "Test nije prošao jer datum polaska " + OcekivaniAranzman.datumPolaska + " nije ispravno azuriran";
                          }
                        }
                        else {
                          this.azurirajNaziv1 += " :Netacno\r";
                          this.azurirajTest =  "Test nije prošao jer aranžman " + OcekivaniAranzman.naziv + " nije ispravno azuriran";
                        }


                      }
                      else{
                        this.azurirajTest =  "Test nije prošao jer aranžman " + ProbniAranzman + " nije ispavno azuriran";
                      }
                    });
                  } else{
                    this.azurirajTest =  "Test nije prošao jer aranžman " + ProbniAranzman + " ne pravi dobar zahtev za azuriranjem";
                  }

                  //Testiranje brisanja rezultata
                  this.AranzmanService.obrisiAranzman(OcekivaniAranzman.id).subscribe((resp) =>{
                    if(resp['message'] === 'ok'){
                      this.AranzmanService.dohvaiBrojAranzmana("","","","",null).subscribe((broj: number)=>{
                        if(broj == 60000)
                            this.testBrisanjaAranzmana="Uspesno izvrseno brisanje probnog aranzmana iz baze";
                        else{
                          this.testBrisanjaAranzmana="Brisanje nije uspesno izvrseno";
                        }
                      })
                    }
                    else{
                      this.testBrisanjaAranzmana = "Zahtev da brisanjem aranzmana nije dobro napravljen!";
                    }
                  })
                });
                //Kraj testiranja azuriranja

            });
          } else{
            this.dodaAranzmanTest =  "Test nije prošao jer aranžman " + ProbniAranzman + " nije dodat u bazu";
          }

        });
        //Kraj dodavanja aranzmana

      });
        
    });
  

    //......KORISNIK........
    this.KorisnikService.prijavaNaSistem("petarPetrovic", "petar123").subscribe((kor: Korisnik)=>{
      
      if(kor){
        this.nePostojiKorisnik = 'Test nije prosao zato sto se korisnik petarpetrovic uspesno logovao - a ne postoji u bazi'
      }
      else{   
        this.nePostojiKorisnik = 'Test je prosao zato sto logovanje nije moguce kada korisnik petarpetrovic ne postoji u bazi'
      }    
    });

    this.KorisnikService.prijavaNaSistem("andjelakuc", "pass111").subscribe((kor: Korisnik)=>{
      if(kor){
        this.PostojiKorisnik = 'Test je prosao zato sto korisnik andjelakuc postoji sa sifrom pass111 - logovanje je moguce'
      }
      else{   
        this.PostojiKorisnik = 'Test nije prosao zato sto korisnik andjelakuc ne postoji sa sifrom pass111 - greska u logovanju'
      }    
    });


    var novKorisnik: Korisnik = new Korisnik();
    novKorisnik.korisnickoIme = "pera";
    novKorisnik.lozinka = "pera123!";
    novKorisnik.privilegija= "admin"



    this.KorisnikService.dodajKorisnika(novKorisnik).subscribe((resp)=>{
      if ( resp['message'] === 'ok') {
        this.KorisnikService.prijavaNaSistem("pera", "pera123!").subscribe((kor: Korisnik)=>{
      
          if(kor){
            this.novKorisnik = 'Test je prosao. Korisnik pera sa sifrom pera123! je dodat u bazu'
          }
          else{   
            this.novKorisnik = 'Test nije prosao. Korisnik pera sa sifrom pera123! nije dodat u bazu'
          }    
        });

      }
      else ( resp['message'] === 'Korisnicko ime je zauzeto.') 
        this.novKorisnik = 'Test nije prosao zato sto korisnik pera vec postoji u bazi';
    })

    novKorisnik.korisnickoIme="andjelakuc";
    novKorisnik.lozinka="pass111";
    this.KorisnikService.dodajKorisnika(novKorisnik).subscribe((resp)=>{
      if ( resp['message'] === 'ok') {
        this.novKorisnikKOjiVecPostoji = 'Test nije prosao. Korisnik andjelakuc vec postoji i dodat je opet u bazu'
      } else  
        this.novKorisnikKOjiVecPostoji = 'Test je prosao. Nije moguce dodati korisnika(andjelakuc) koji vec postoji';
    })
  

  //........LOKACIJA........
  this.LokacijaService.dohvatiLokacijePretraga("Budva", "Crna gora" , "Evropa").subscribe((data: Lokacija[])=>{
    let lokacije  = data;
    if (lokacije[0].naziv == "Budva") {
      this.pretragaLokacijePostoji = "Test prosao. Pretaga (Evropa, Crna gora, BUdva) postoji."; 
    } else {
      this.pretragaLokacijePostoji = "Test nije prosao. Pretaga (Evropa, Crna gora, BUdva) postoji.";   
    }
  });

  
  this.LokacijaService.dohvatiLokacijePretraga("Beograd", "Crna gora" , "Evropa").subscribe((data: Lokacija[])=>{
    let lokacije  = data;

    if (lokacije.length == 0) {
      this.pretragaLokacijeNePostoji = "Test prosao. Pretaga (Evropa, Crna gora, Beograd) ne postoji."; 
    } else {
      this.pretragaLokacijeNePostoji = "Test je prosao. Pretaga (Evropa, Crna gora, Beograd) ne postoji.";   
    }
  });

  //........REZERVACIJA........
  var novaRezervacija : Rezervacija = new Rezervacija();
  novaRezervacija.ime= "Petar";
  novaRezervacija.prezime = "Petrovic";
  novaRezervacija.telefon = "123";
  novaRezervacija.email = "pera@gmail.com";
  novaRezervacija.nacinPlacanja = "kes"
  novaRezervacija.brojOdraslih = "2";
  novaRezervacija.brojDece = "2";
  novaRezervacija.komentar ="komentar test";
  novaRezervacija.status = "obrada";
  novaRezervacija.nazivAranzmana = "Test Rezeervacija";

  this.rezervacijaService.dodajRezervaciju(novaRezervacija).subscribe((resp)=>{
    if ( resp['message'] === 'ok') {
      this.rezervacijaService.dohvatiSveRezervacije().subscribe((data: Rezervacija[])=>{
        var sveRezervacije  = data;
        if (sveRezervacije[0].nazivAranzmana == "Test Rezeervacija")  {
          this.dodataRezervacija = " Rezervacija je uspesno dodata, a zatim procitana iz baze";
        } else{
          this.dodataRezervacija = " Rezervacija nije uspesno dodata, a zatim procitana iz baze";
        }
      })
    }});


  }

}


