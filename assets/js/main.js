//Arrow Function=====================================

//Lev1_1-------

function intro() {
    console.log("Hello World");
}
intro()

intro = () => {
    console.log("Hello World");
}
intro()

intro = () => console.log("Hello World");
intro()

//Lev1_2------------------

// function sayHello() {
//     console.log('hello');
// }
// sayHello();

// function summe(x, y) {
//     console.log(x + y);
// }
// summe(2, 3)

// function multiply(x, y) {
//     console.log(x * y);
// }
// multiply(2, 3)


// function dataType(data) {
//     console.log(typeof data);
// }
// dataType(true)
// dataType('hi')
// dataType(1)
// dataType({ name: 'John' })
// dataType([0, 1])

const sayHello = () => console.log('hello');
sayHello();

const summe = (x, y) => console.log(x + y);
summe(2, 3)

const multiply = (x, y) => console.log(x * y);
multiply(2, 3)

const dataType = (data) => console.log(typeof data);
dataType(true)
dataType('hi')
dataType(1)
dataType({ name: 'John' })
dataType([0, 1])

//Lev1_4------------------

let hero = function(heroName, heroPower, heroEnemy) {
    let name = 'Mein Lieblingsheld aus Marvel ist:'
    let power = 'Er/Sie hat die Fähigkeit:'
    let enemy = 'Sein/Ihr größter Gegner ist:'
    console.log(`${name} ${heroName},${power} ${heroPower},${enemy} ${heroEnemy} `);
}

hero('Superman', 'Retter', 'General X')

//Lev1_6------------------
let returnOne = function() {
    return 1;
}
let x = 1
let y = returnOne();
if (x === y) {
    console.log('Wird das gedruckt');
}
//super vergleich !!!!!!!!!!!!!!!!!!!!!!!!!!!!

//Lev1_6------------------------------------
let multiply1 = (a) => { return a * 2 }
console.log(multiply1(5));

//Lev1_8------------------------------------
let calculateAge = (yearBorn) => {
    return 2022 - yearBorn
}
console.log(calculateAge(1986));

//Lev1_9------------------------------------

let werBinich = (vorname, nachname, geburtort, alter, wohnort) => {
    return 'Mein name ist ' + vorname + '' + nachname + '.' + 'Ich bin in ' + geburtort + ' geboren. Ich lerne Coden bei SuperCode.Ich bin ' + alter + ' Jahre alt. Ich wohne in ' + wohnort + '.'
}
console.log(werBinich('Kemal', 'Tütüncü', 'Kayseri', 36, 'Monheim am Rhein'));