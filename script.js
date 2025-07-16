const osoba ={
    imie: 'Oleh',
    nazwisko: 'Nadopta',
    get imieOsoby(){
        return this.imie;
    },
    set imieOsoby(imieOsoby){
        this.imie = this.imieOsoby;
    },
    get podpis(){
        return this.imie+' '+this.nazwisko;
    }
}
// console.log(osoba.imie)
// console.log(osoba.imieOsoby)
// osoba.imie = 'Lesyk'
// console.log(osoba.imieOsoby)
console.log(osoba.podpis.toUpperCase())


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
//     },
//     {
//         marka: 'Toyota',
//         model: 'Camry',
//         rok: '2015',
//         cena: '50000',
//         ilosc: '5',
//     },
//     {
//         marka: 'Honda',
//         model: 'Civic',
//         rok: '2017',
//         cena: '70000',
//         ilosc: '6',
//     }
// ]

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
