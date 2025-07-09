let x = 3
 
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


switch (x) {
    case 1:
    case 2:
    case 3:        
        console.log('x wynosi 1 lub 2 lub 3')
        break;
    case 4:
        console.log('x wynosi 4')
        break;
    case 5:
        console.log('x wynosi 5')
        break;
    default:
        console.log('zadna z powyzrzysch opcji nie wostala wybrana')            
}
