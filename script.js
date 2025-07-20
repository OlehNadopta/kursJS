let wybor;
const pracownicy = new Array()

function Osoba(imie,nazwisko, numer){
    this.imie = imie
    this.nazwisko = nazwisko
    this.numer = parseInt(numer)
}

// function tworzenie(imie,nazwisko){
//     let osoba = new Osoba(imie,nazwisko)
//     pracownicy.push(osoba)
// }

// function usuwanie(nr){
//     delete pracownicy[nr]
// }


const metody = {
    tworzeniaPracownika: function(imie,nazwisko,numer){
        console.log(this)
        let osoba = new Osoba(imie,nazwisko,numer)
        pracownicy.push(osoba)
    },
    wyswietlPracownika: function(){
        document.write('Imię: ' ,this.imie,' nazwisko: ',this.nazwisko)
    },
    usuwaniePracownika: function(){
        delete pracownicy[this.numer-1]
    }
}

while(wybor!=0){
    wybor = prompt('Podaj co chcesz zrobis. (1-tworzenie, 2-usuwanie, 3-wyswietlanie, 4-wyswietl pracownika 0-wyjscie)')
    switch(wybor){
    case '1':
        let imie = prompt('podaj imie')
        let nazwisko = prompt('podaj nazwisko')
        let numer = prompt('Podaj numer pracownika')
        let tworzenie = metody.tworzeniaPracownika.bind(pracownicy)
        tworzenie(imie,nazwisko,numer)
        break;
    case '2':
        let nrP = prompt('podaj nr indeksu pracownika do usuniecia')
        metody.usuwaniePracownika.apply(pracownicy[nrP])
        wybor=0
        break;
    case '3':    
        pracownicy.forEach((e)=>{
            console.log(e)
        })
        break;
    case '4':
        let nr = prompt('podaj numer indeksu pracosnika')
        metody.wyswietlPracownika.call(pracownicy[nr])
        wybor=0
        break;

    default:
        document.write('nie wybrano odpowiedniej opcji!')

}
}
console.log(pracownicy)


// const samochody = {
//     marka: 'Opel',
//     model: 'Astra',
//     wyswietl: function(){
//         console.log(this.model+' '+this.marka)
//     }
// }

// let auto = samochody.wyswietl.bind(samochody);

// auto()

// const liczby = [1,2,3,4,5,6]
// const liczby2 = [8,9,...liczby]
// console.log(liczby2)

// function suma(a,b,c,d,e,f){
//     return a+b+c+d+e+f
// }
// console.log(suma(...liczby))
// let a = 3;
// let b = 7;

// ((x,y) => console.log(x+y))(a,b)

// let suma = (x,y) => console.log(x+y)

// suma(a,b)


// let a = 3;
// let b = 7;
// let suma = 0;

// (function (x,y){
//     let suma = x+y
//     return console.log(suma)
// }(3,5));

// console.log(suma)


// let a = 4
// let b = 8

// function dodawanie (x,y){
//     let suma = x+y
//     return suma
// }

// dodawanie(a,b)

// console.log(dodawanie(a,b))

// const osoba ={
//     imie: 'Oleh',
//     nazwisko: 'Nadopta',
//     get imieOsoby(){
//         return this.imie;
//     },
//     set imieOsoby(imieOsoby){
//         this.imie = this.imieOsoby;
//     },
//     get podpis(){
//         return this.imie+' '+this.nazwisko;
//     }
// }
// console.log(osoba.imie)
// console.log(osoba.imieOsoby)
// osoba.imie = 'Lesyk'
// console.log(osoba.imieOsoby)
//console.log(osoba.podpis.toUpperCase())


// let ofertyPracy = {
//     nazwa: 'Programista',
//     wynagrodzenia: 5000,
//     ogloszenie() {
//         console.log(`${this.nazwa}`, `${this.wynagrodzenia}`+' zl');
//     }
// }
// ofertyPracy.ogloszenie()


// var osoba = {
//     imie: 'Jan',
//     nazwisko: 'Kowalski',
//     wiek: 35,
//     show: function(){
//         console.log('Mam na imie '+this.imie+' a na nazwisko '+this.nazwisko+' mam lat '+this.wiek+'');
//     }
// }

// osoba.show()

// const auta = [
//     {
//         marka: 'Lexus',
//         model: 'IS',
//         rok: '2012',  
//         cena: '90000',
//         ilosc: '2',
//         wyswietl: function() {return console.log(this.marka+''+this.model+''+this.cena)}
//     },
//     {
//         marka: 'Toyota',
//         model: 'Camry',
//         rok: '2015',
//         cena: '50000',
//         ilosc: '5',
//         wyswietl: function() {return console.log(this.marka+''+this.model+''+this.cena)}
//     },
//     {
//         marka: 'Honda',
//         model: 'Civic',
//         rok: '2017',
//         cena: '70000',
//         ilosc: '6',
//         wyswietl: function() {return console.log(this.marka+''+this.model+''+this.cena)}
//     }
// ]

// function wyswietl(){
//     console.log(this)
// }

// wyswietl.call(auta)

// function newCar(marka, model, przebieg,){
//     this.marka=marka;
//     this.model=model;
//     this.przebieg=przebieg;
// }

// function setPrice(cena){
//     newCar.apply(this, ['polones', 'serenka', 10000]);
//     this.cena = cena
//     console.log('Szczegoly samochodu ', `${this.marka}`)
// }

// const nowyAuto = new setPrice(parseInt(prompt('Spierdalaj')))

// const totalPriceCar = auta.reduce(function(prevousValue, curentValue) {
//     return prevousValue + curentValue.ilosc*curentValue.cena
// }, 0)

// console.log(totalPriceCar)

// const results = auta.filter(function(e){
//     return e.rok>2014
// });
// console.log(results)


// const newPrice = auta.map(function(e) {
//     return e.cena*1.2
// });

// console.log(auta)
// console.log(newPrice)

// auta.forEach(function(e) {if (e.cena>60000) return console.log(e.marka)})


//auta.forEach(function(e) {console.log('i')})

//console.log(auta)


// const tablica = [1,2,3]

// tablica[3] = 4

// tablica.unshift(0)
// tablica.push(5)

// tablica.shift()
// tablica.pop()

// console.log(tablica)

// const tab = [1, 2, 3, 4, 5]

// for (let i in tab){
//     tab[i] *=2
//     console.log(tab[i])
// }

// for (let i=0 ; i<tab.length ; i++){
//     tab[i] *=2
//     console.log(tab[i])
// }

//const imiona = ['Robert', 'Ania', 'Oleh', 'Paulina', 12, true]
//const tablica = new Array('mleko', 'jajka', 'woda', 'maka', 12, true)
//console.log(tablica)

// let a=0
// let b=0

// let suma=0

// do {
//     let a = parseInt(prompt('podaj pierwsza liczbe'))
//     let b = parseInt(prompt('podaj druga liczbe'))
//     suma = a+b
//     console.log('Suma podanych lisc wynosi  '+suma)

// } while (suma !== 0)


// while (suma >=0){
//     let a = parseInt(prompt('podaj pierwsza liczbe'))
//     let b = parseInt(prompt('podaj druga liczbe'))
//     suma=a+b
//     console.log('Suma podanych lisc wynosi  '+suma)
// }

// let a = parseInt(prompt('podaj pierwsza liczbe'))
// let b = parseInt(prompt('podaj druga liczbe'))
// console.log(a+' '+typeof(a))


// let i=0
// while (i<10){
//     console.log('kolejne przejscie  '+i)

//     i++
// }


// for (let i=0; i<10; i++){
//     console.log('kolejne przejscie petli  '+i)
// }

// for (let i=2; i<=20; i+=2){
//     console.log(i)
// }

// let x = 10
// let y = 5
// let z = 0

// if (x!=y && x!=z && y!=z){
//     if(x>y && x>z){
//         console.log('Najwieksza wartosc to '+x)
//     }
//     if (y>x && y>z) console.log('Najwieksza wartosc to '+y)
//     if (z>x && z>y) console.log('Najwieksza wartosc to '+z)    
// }

// if (x>y){
//     if (x>z){
//         console.log('najwieksza liczba to '+x)
//     }else{
//         console.log('Najwieksza warosc to '+z)
//     }
// }else if (y>x){
//     if (y>z){
//         console.log('najwieksza liczba to '+y)
//     }else{
//         console.log('Najwieksza wartosc ot '+z)
//     }
// }    

// if (x==15){
//     console.log('Wartosc x = 15')
// }else if (x<15){
//     console.log('Wartoscx jest mnijsza od 15')
// }else{
//     console.log('Wartosc x jest wieksza od 15')
// }

// if (x % 2 === 0) console.log('jest to liczba parzysta')
// else console.log('jest to liczba nie parzysta')

// const czyParzysta = (x % 2 === 0)? 'pzrzysta' : 'nie parzysta'
// console.log(czyParzysta)

// switch (x) {
//     case 1:
//         console.log('x wynosi 1')
//         break;
//     case 3:
//         console.log('x wynosi 3')
//         break;
//     case 5:
//         console.log('x wynosi 5')
//         break;
//     default:
//         console.log('zadna z powyzrzysch opcji nie wostala wybrana')            
// }

// switch (x) {
//     case 1:
//     case 2:
//     case 3:
//         if (x==1) console.log('x wynosi 1')
//         else if (x==2) console.log('x wynosi 2')
//         else console.log('x wynosi 3')       
//         break;
//     case 4:
//         console.log('x wynosi 4')
//         break;
//     case 5:
//         console.log('x wynosi 5')
//         break;
//     default:
//         console.log('zadna z powyzrzysch opcji nie wostala wybrana')            
// }
