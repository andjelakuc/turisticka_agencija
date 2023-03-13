# Turistička agencija

## O aplikaciji

Turistička agencija je aplikacija namenjena za rezervaciju aranžmana u turističkoj agenciji. Pomoću interfejsa aplikacije se pristupa trenutnoj ponudi aranžmana turističke agencije. Aplikacija omogućava pretragu aranžmana po nazivu aranžmana, lokaciji, državi, kontinentu, tipu transporta i datumu. Korisnik aplikacije, tj. svaka osoba koja uđe u aplikaciju, ima mogućnost rezervacije aranžmana gde ostavlja svoje lične podatke i dodatne detalje u vezi aranžmana(npr. posebne potrebe, zahteve itd.). U aplikaciji je omogućeno logovanje administratora i staff-a turističke agencije koji imaju dodatne mogućnosti u aplikaciji kao npr. postavljanje novog aranžmana, ažururanje aranžmana, brisanje aranžmana i odobravanje ili odbijanje rezervisanih aranžmana od strane korisnika. Administrator dodatno ima opciju dodavanja staff-a.

## Korišćene tehnologije

1. Angular
2. NodeJS
3. ExpressJS
4. MongoDB
5. TypeScript
6. HTML & CSS
7. Docker

## Instrukcije za pokretanje projekta

1. Instalirati Docker Desktop. Link za instalaciju Docker Desktop-a: https://www.docker.com/products/docker-desktop/
3. Klonirati ovaj github repozitorijum
4. Otvoriti Docker Desktop i sačekati da se završi startovanje
5. Otvoriti terminal i pozicionirati se u folder projekta(turisticka_agencija)
6. U terminalu pokrenuti komandu:
```sh
$ docker-compose build
```
7. Zatim pokrenuti komandu:
```sh
$ docker-compose up
```
U Docker Desktop-u će se pojaviti kontejneri, a u terminalu će se ispisivati poruke. Frontend je pokrenut kada se u terminalu ispiše poruka "Compiled successfully". Server će se pokretati više puta dok baza ne bude u potpunosti inicijalizovana. Projekat je u potpunosti pokrenut kada se u terminalu ispiše i poruka "Connected to MongoDB successfully".

8. U slučaju prekida iz terminala, potrbno je nakon prekida izvršiti komandu:
```sh
$ docker-compose down
```
da bi se kontejneri izbrisali. U slučaju prekida iz Docker Desktop-a potpunim brisanjem kontejnera, nije potrebno izvršiti ovu komandu.

## Članovi tima
- Nikolina Potparić npotparic1005@gmail.com - backend inženjer
- Natalija Andrić natalijaandric5@gmail.com - frontend inženjer
- Teodora Nović teodora.novich1978@gmail.com - QA/test inženjer
- Anđela Kuč andjelakuc01@gmail.com - sistem inženjer
