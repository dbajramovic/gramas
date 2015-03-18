Zahtjevi i specifikacija aplikacije po modulima

1. Sistemski modul
Vrste korisnika u sistemu su: a. Neregistrovani b. Registrovani
Privilegije registriranih korisnika u sistemu su: 
	a. Standardni korisnik(Majstori) 
	b. Administrator(Prodavaci) 
	c.SuperAdmin(postavljanje admina)
(Napomena: Baza podataka dolazi sa ubacenim osnovnim admin podacima,tako da je login moguc odmah. SuperAdmin ce registrovati inace admine po potrebi.)

2. Registracija
Posjetioc stranice(neregistrovani korisnik) može se registrovati ili prijaviti se na sistem.
Prilikom registracije, posjetioc stranice unosi sljedeće podatke: 
	- korisničko ime/email adresa,
	- ime 
	- prezime
	- o sebi(potrebno je radi laznih profila)
	- kontakt telefon
	- password.
E-mail ce se koristiti kao korisnicka imena kako bi korisnik bio stalno u dodiru sa e-mailom i jer su jedinstveni.
Korisničke šifre su duge minimalno 6 znakova (maksimalno 16) i čuvaju se hashirane(vidjet cemo jos kako).
Po uspješno obavljenoj registraciji sistem će novoregistriranom korisniku poslati email. 
Email će sadržavati dva linka: 
	- Prvi link je za potvrdu i aktivaciju registracije.(korisnički nalog se aktivira i korisnik se može prijaviti na sistem.)
	- Drugi link je za pogresnu prijavu registracije.(pri cemu se aktivira brisanje kreiranog naloga posjecivanjem ovog linka.)
(NAPOMENA: Moguce su jos modifikacije po ovom pitanju jer je registracija jako osjetljiva za ovu kompaniju)

3. Login modul
Ako je korisnik registrovan, onda ima mogucnost da se prijavi na sistem uz pomoc svog korisničkog imena i passworda. U suprotnom moze samo pregledavati sadrzaj na stranicama bez cijena.
U slučaju da zaboravi šifru, korisnik može resetovati password. (na zahtjev za resetovanjem, salje se e-mail koji sadrzi link za potvrdu resetovanja passworda pri cemu unosi novu sifru kao prilikom registracije)
Password se resetuje na način da se na zahtjev šalje email na korisnikovu email adresu. 
Banovani korisnik ne može se prijaviti na sistem.
Korisnik koji nije potvrdio svoju registraciju ne može se prijaviti na sistem, aktivacijski link istice za 7 dana.


3. User modul
Registrovani korisnik(majstor) može koristiti funkcije uređivanja vlastitog profila(dodavanje novih informacija o djelatnosti kojom se bavi) kao i odjave sa sistema.
Profil registriranog korisnika sadrži: 
	- email/korisnicko ime (neizmjenjiv), 
	- korisničku šifru (neizmjenjiva), 
	- korisnički opisni tekst (izmjenjiv), 
	- vrsta zanata(izmjenjiv),
	- materijali od posebnog interesa(izmjenjiv),
	- radna iskustva u kompanijama(izmjenjiv),
	- slika(izmjenjiva)
	- opcija: primanje news feed-a za svaku promo akciju
	- opcija: primanje e-mail odgovora za svaki zahtjev
Takodjer ce imati historiju korisničke aktivnosti kao listu (pitanja i odgovori, zahtjevi za specijalnu cijenu).
Automatski podaci:
	- vrijeme posljednje prijave na sistem
	- dodijeljeni bodovi za kupovinu
	- broj postavljenih zahtjeva za cijenu(odrazava aktivnost korisnika)
Korisnički opisni tekstovi su dugi minimalno 2 a maksimalno 50 znaka.
Automatski podaci su cjelobrojna vrijednost koja je određena na osnovu doprinosa korisnika zajednici. 
Izmjene na profilu se ne prihvataju dok korisnik ne odabere akciju "Spasi".
Admin tip korisnika u sistemu moze jedino pregledavati profil svakog registriranog korisnika, dok oni medjusobno ne mogu.

4. Admin modul
Administrator(Prodavac) ima pravo pristupa administratorskom panelu sistema, sa dodijeljenom i username-om sifrom za pristup.
Administratorski dio sistema omogućava: 
	- pregled korisničkih profila te njihovo pretraživanje, kao i pregled svih.
	- unos, brisanje, editovanje, pretragu proizvoda za katalog
	- unos, brisanje, editovanje, pretragu odgovora za zahtjeve za cijene
	- dodavanje akcija prodaje na naslovnu stranu
	- banovanje i skidanje bana za korisnika,
	- dodjele bodova aktivnosti za korisnika,
Standardni korisnici mogu biti banovani tj. može im biti uskraćen pristup korištenju funkcija za registrirane korisnike.
Administrator ne može banovati administratora. SuperAdmin moze obrisati administratora.

5. Feed modul
Svi korisnici koji imaju odabrano primanje news feed-a, prilikom kreiranja svake promo akcije od strane admina primaju na e-mail obavijest o tome.

6. Modul za zahtjeve
Registrovani korisnik(majstor) može odabrati odredjene artikle, i poslati upit za cijenom adminu.
Pri tome ima mogucnost citanja starih zahtjeva i odgovora. 
Takodjer ima mogucnost postavljanja pitanja adminu i pregled svih svojih postavljenih pitanja i odgovora.
Pitanje se sastoji od naslova, sadržaja pitanja i liste ključnih riječi(nije obavezno),te osnovni podaci o korisniku(Ime, prezime, email). 
Zahtjev se sastoji od odabranih artikala(korpa), datum i vrijeme, dodatni tekst(nije obavezno), te osnovni podaci o korisniku(Ime, prezime, email).
Administrator može odgovoriti, obrisati pitanje ili zahtjev, obrisati odgovor.
Naslov pitanja ima minimalnu dužinu od 10 a maksimalnu od 50 znakova.
Sadržaji koje korisnici unose u sistem su tekstualni i maksimalna dužina im je 200 znakova. 
Odgovor se sastoji od sadržaja odgovora, i automatskim naslovom sa dodatkom: "ODG:".

7. Modul pretrage
Svi korisnici mogu koristiti funkciju pretraživanja kataloga proizvoda. Klikom na proizvod otvaraju se detalji o njemu.
Pretraga se može obavljati po ključnim riječima imena proizvoda, vrstom djelatnosti ili putem datuma objave.
Sistem prikazuje rezultate pretrage od najrelevantnijih prema manje relevantnim.

8. Modul proizvoda
Admin ima mogucnost da unosi proizvode u bazu, pri cemu bi se spasavanjem istih, odma osvjezilo stanje svih kataloga na naslovnoj strani.
Unos novog artikla sadrzi polja: 
	- naziv
	- kolicina
	- dimenzije
	- sifra artikla	
	- boja
	- opis artikla(za sta se najcesce koristi i sl.)
	- slika naslovna(300x300)
	- aktivan?
Brisanje artikla automatski brise sve podatke o artiklu iz baze, dok "aktivan" trenutno zaledi prikaz istog artikla tako da se ostalim korisnicima ne vidi na naslovnoj stranici.
Pretraga artikala je moguca na isti nacin kao i na naslovnoj strani.
Uredjivanje artikla omogucuje izmjenu svih unesenih polja.

7. Modul akcije
Admin ima mogucnost kreiranja, brisanja, i pregled akcija.
Unos nove akcije sadrzi polja:
	- slika
	- naslov
	- opis
	- od datuma
	- do datuma
	- poslati news feed
	- postaviti na naslovnu stranicu
Nakon spasavanja akcije, admin ima mogucnost slanja iste putem news feed-a i na naslovnu stranicu.
Na pregledu akcija moze izabrati koje zeli vidjeti na naslovnoj stranici.


Tehnološka arhitektura aplikacije:
MongoDb - baza podataka za spremanje podataka
Angularjs - front-end skriptni jezik za upravljanje view modelima i njihovim data-bindingom za viewe
Express - framework za pozadinski Nodejs koji nam pomaze za ukljucivanje raznih modula koje cemo koristiti
Nodejs - back-end platforma za izvrsavanje skriptnog jezika na operativnom sistemu, pri cemu je onda javascript pozadinski jezik

Tehnološki stack: MEAN

Entity-Relationship dijagram:
