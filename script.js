alert('Öppna upp konsolen för utmatningen.')
/**
 * 2 Kontrollstrukturer och programflöde
 * 1 Skriv ett program som frågar användaren efter ett lösenord. Hitta 
 * på ett hemligt lösenord och spara det i en variabel. När användaren 
 * har skrivit in ett ord ska programmet jämföra med det sparade 
 * lösenordet och skriva ut om det var rätt eller inte. Använd en if-sats.
 */
let pwd = null
function oneFunction() {
  const pw = prompt('Lösenord?')

  if (!pwd) {
    pwd = pw
    alert('Lösenord satt.')
    return
  } else if (pwd === pw) {
    alert('Korrekt lösenord!')
    return
  }

  alert('Fel lösenord!')

}
one.onclick = oneFunction

/**
 * 2 Skriv ett program som frågar användaren efter ett tal. Det ska 
 * skriva ut om talet är mindre än 100, lika med 100 eller större.
 */
function twoFunction() {
  const tal = prompt('Ge mig ett tal')

  if (tal >= 100) {
    alert('Lika med eller mer än 100.')
  } else if (tal < 100) {
    alert('Mindre än 100.')
  }
}
two.onclick = twoFunction

/**
 * 3 Skriv ett program som frågar användaren efter ett tal mellan 1 
 * och 100. Programmet ska ha ett hemligt tal lagrat i en variabel. Det 
 * ska fortsätta fråga användaren till dess att användaren gissar det 
 * hemliga talet. Om man gissade för högt eller för lågt så ska det 
 * skrivas ut, så att användaren har en rimlig chans att klara det.
 * Exempel: programmet har det hemliga talet 27. Användaren gissar 
 * på 50. Programmet skriver ut att användaren gissade för högt. 
 * Användaren gissar därefter på 20. Programmet skriver ut att det var 
 * för lågt. Användaren gissar slutligen på 27. Programmet skriver ut 
 * att det var rätt och avslutas.
 * Extra utmaning: slumpa det hemliga talet med hjälp av 
 * Math.random och farbror google. Spara antalet gissningar i en 
 * variabel och skriv ut det när användaren gissat rätt.
 */

window.onload = function () {
  let randomNumber = 0
  let guesses = 0
  function randomizeNumber() {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    let min = Math.ceil(1)
    let max = Math.floor(100)
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
  }

  randomizeNumber()

  function threeFunction() {
    const answer = prompt('Gissa talet mellan 1 och 100:')
    guesses++

    const num = Number(answer)

    if (isNaN(num)) {
      alert('Det du angav var inte ett nummer! Försök igen.')
      return
    }

    if (num === randomNumber) {
      alert('Rätt svar! Bra jobbat.\n\nAntal gissningar: ' + guesses + '\n\nGenererar ett nytt nummer.')
      randomizeNumber()
      return
    }

    if (num > randomNumber) {
      alert('Numret är mindre!')
      return
    } else if (num < randomNumber) {
      alert('Numret är större!')
      return
    }
  }
  three.onclick = threeFunction
}

/**
 * 4 Skriv ett program som ber användaren skriva in en månad. 
 * Programmet ska göra om månaden till månadens siffervärde. T.ex. 
 * ska januari bli 1 och december 12. Använd switch. Jämför din 
 * lösning med en klasskamrat när du är klar
 */
function fourFunction() {
  const mon = prompt('Ange en månad:')

  let answer = 0
  switch (mon.toUpperCase()) {
    case 'JANUARI':
      answer = 1
      break
    case 'FEBRUARI':
      answer = 2
      break
    case 'MARS':
      answer = 3
      break
    case 'APRIL':
      answer = 4
      break
    case 'MAJ':
      answer = 5
      break
    case 'JUNI':
      answer = 6
      break
    case 'JULI':
      answer = 7
      break
    case 'AUGUSTI':
      answer = 8
      break
    case 'SEPTEMBER':
      answer = 9
      break
    case 'OKTOBER':
      answer = 10
      break
    case 'NOVEMBER':
      answer = 11
      break
    case 'DECEMBER':
      answer = 12
      break
  }

  if (answer === 0) {
    alert('Angav du en månad på Svenska? Försök igen.')
    return
  }

  alert('Du angav månad ' + answer + '.')
}
four.onclick = fourFunction

/**
 * 5 Skriv ett program som skriver ut talen 1 till 16 med hjälp av en 
 * loop.
 */
function fiveFunction() {
  for (let index = 0; index < 16; index++) {
    console.log(index + 1)
  }
  
}
five.onclick = fiveFunction

/**
 * 6 Skriv ett program som har talet 65536 i en variabel. Så länge som 
 * variabeln är större än 2 ska programmet loopa, skriva ut talet och 
 * sedan dela variabeln med 2.
 */
const tal = 65536
function sixFunction() {
  let t = tal
  while (t > 2) {
    console.log(t)
    t = t / 2
  }
  alert('Whew! Titta i konsolen!')
}
six.onclick = sixFunction

/**
 * 7 Skriv ett program som loopar och frågar användaren efter en 
 * sträng. Så länge som strängen inte är en tom sträng så ska 
 * programmet lägga ihop den med tidigare strängar, med ett 
 * mellanrum. Om användaren t.ex. har skrivit "ord1" tidigare och 
 * skriver "ord2" ska den nya strängen bli "ord1 ord2". Fortsätt 
 * loopa tills användaren skickar en tom sträng eller en punkt.
 */
let str = ''
function sevenFunction() {
  const answer = prompt('Mata in något, avsluta med en tom rad eller en punkt ".".')

  str += answer + ' '

  if (answer === '') {
    alert(str)
    return
  } else if (answer === '.') {
    alert(str)
    return
  }

  sevenFunction()
}
seven.onclick = sevenFunction

/**
 * 7b Skriv ett program som skriver ut de jämna talen 20 till 2 i den 
 * ordningen, med hjälp av en loop.
 */
function eightFunction() {
  for (let index = 20; index > 0; index -= 2) {
    console.log(index)
  }
  
}
eight.onclick = eightFunction

/**
 * 8 Skriv ett program som frågar användaren efter ett tal. 
 * Programmet ska loopa så länge som talet är större än 2. Varje loop 
 * ska programmet välja: om talet är udda, multiplicera talet med 3 
 * och lägg till 1. Om talet är jämnt, dela det med 2. Skriv ut det nya 
 * talet varje varv i loopen.
 */
function nineFunction() {
  const answer = prompt('Mata in ett TAL över 2.')

  const num = Number(answer)

  if (isNaN(num)) {
    alert('Det du angav var inte ett nummer! Försök igen.')
    return
  }

  if (num <= 2) {
    alert('Talet är inte större än 2!')
    return
  }

  // Udda, från libraryn "is-odd" på NPM :)
  let isOdd = (num) => (num % 2) === 1
  if (isOdd(num)) {
    alert('Svar: ' + ((num * 3) + 1))
  } else if (!isOdd(num)) {
    // Är jämnt
    alert('Svar: ' + (num / 2))
  }

  nineFunction()
  console.log(num)
}
nine.onclick = nineFunction

/**
 * a Vad kommer följande kod att skriva ut?
 * let text = ''
 * for( let i=0; i<6; i++ ) {
 *   for( let j=0; j<8; j++ ) {
 *     if( (i + j) % 2 === 0) text += '#'
 *     else text += '.'
 *   }
 *   text += '\n'
 * }
 * console.log(text)
 * Ändra koden så att den skriver ut:
 * 9b 9c 9d 9e 9f 9g
 * #....... #....... ..###... ..#..... ....##.. #....#..
 * #....... .#...... ..###... ..#..... ....#... .#..#...
 * #....... ..#..... ..###... ######## ...##... ..##....
 * #....... ...#.... ..###... ..#..... ..#.#... ..##....
 * #....... ....#... ..###... ..#..... .#..#... .#..#...
 * #....... .....#.. ..###... ..#..... #...#... #....#..
 */
function tenFunction() {
  let text = ''
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 8; j++) {
      if (j === 0) text += '#'
      else text += '.'
    }
    text += '\n'
  }
  console.log(text)

  text = ''
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 8; j++) {
      if (i === j) text += '#'
      else text += '.'
    }
    text += '\n'
  }
  console.log(text)

  text = ''
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 8; j++) {
      if (j >= 2 && j < 5) text += '#'
      else text += '.'
    }
    text += '\n'
  }
  console.log(text)

  text = ''
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 8; j++) {
      if (i === 2 || j === 2) text += '#'
      else text += '.'
    }
    text += '\n'
  }
  console.log(text)

  /**
   * ij0 1 2 3 4 5 6 7
   * 0 . . . . # # . .
   * 1 . . . . # . . .
   * 2 . . . # # . . .
   * 3 . . # . # . . .
   * 4 . # . . # . . .
   * 5 # . . . # . . .
   */

  // 012345
  // 543210

  /**
   * 0 === 5 - 0 = false // i = 0, j = 0
   * 1 === 5 - 0 = false // i = 1, j = 0
   * ...
   * 5 === 5 - 0 = true // i = 5, j = 0
   * 0 === 5 - 1 = false // i = 0, j = 1
   * ...
   * 0 === 5 - 5 = true // i = 0, j = 5
   * 1 === 5 - 1 = false // i = 1, j = 1
   * ...
   * 5 === 5 - 5 = true // i = 5, j = 5
   */
  text = ''
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 8; j++) {
      if (i === 5 - j || j === 4) text += '#'
      else text += '.'
    }
    text += '\n'
  }
  console.log(text)

  text = ''
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 8; j++) {
      if (i === j || i === 5 - j) text += '#'
      else text += '.'
    }
    text += '\n'
  }
  console.log(text)

  
}
ten.onclick = tenFunction
// https://codepen.io/kyh-karar/pen/poWOMxM?editors=0011

/**
 * 2a Skriv en funktion med namnet add som lägger ihop två tal och 
 * returnerar resultatet.
 */
function add (a, b) {
  
  return a + b
}
eleven.onclick = () => console.log(add(1,5))

/**
 * 2b Skriv en funktion med namnet multi som multiplicerar tre tal 
 * och returnerar resultatet. Vad händer om man anropar funktionen 
 * med färre än tre parametrar?
 */
function multi (a, b, c) {
  
  return a * b * c
}
twelve.onclick = () => console.log(multi(5,2,3))
twelvebroken.onclick = () => console.log(multi(5,2))

/**
 * 2c Skriv en funktion som tar fyra tal som parametrar. Den ska 
 * multiplicera de tre första och lägga ihop resultatet med den fjärde. 
 * Använd funktionerna add och multi.
 */
function thirteenFunction (a, b, c, d) {
  
  return add(multi(a, b, c), d)
}
thirteen.onclick = () => console.log(thirteenFunction(5,2,7,1))

/**
 * 3 Skriv en funktion som tar tre parametrar: name, city och 
 * favoriteColor. Den ska skriva ut informationen till konsolen i en 
 * fullständig mening. Exempel "Välkommen	Namn	från	Göteborg
 * med	favvofärg	blått".
 */
function fourteenFunction (name, city, favoriteColor) {
  
  console.log('Välkommen ' + name + ' från ' + city + ' med favvofärg ' + favoriteColor)
}
fourteen.onclick = () => fourteenFunction('Namn', 'Göteborg', 'Blått')

/**
 * 4 Skriv en funktion som tar en parameter som ska vara en sträng 
 * och returnerar ett tal. Om det inte går att göra om parametern till 
 * ett tal ska funktionen returnera strängen oförändrad. Tips: minus 
 * noll, isNaN(variabel).
 */
function fifteenFunction (str) {
  

  // const num = str - 0 // Why? Ser kryptiskt ut.
  // Out with the old, in with the new:
  const num = Number(str)

  // TERNARY OPERATOR
  return isNaN(num) ? str : num
}
fifteen.onclick = () => console.log(fifteenFunction('15'))

/**
 * 5 Skriv en funktion som tar två parametrar och talar om ifall de är 
 * samma datatyp. Tips: använd typeof.
 * Exempel:
 * sameDataType('test', 'topp') → true
 * sameDataType(5, '5')	 	 → false.
 */
function sameDataType (type1, type2) {
  

  // Ez pz, but not good enough. Example: typeof NaN === 'number' // Why ????
  return typeof type1 === typeof type2
}
sixteen.onclick = () => console.log(sameDataType('test', 'topp'))
sixteenTwo.onclick = () => console.log(sameDataType(5, '5'))

/**
 * 6 Skriv en funktion som avrundar ett tal till två decimaler. Tips: man 
 * kan använda Math.round(x) för att avrunda ett tal till närmast heltal
 */
function seventeenFunction () {
  

  return (11.256531).toFixed(2)
}
seventeen.onclick = () => console.log(seventeenFunction())

/**
 * 7 Skriv en funktion med namnet paragraph, som tar en parameter. 
 * Den ska returnera en sträng enligt det här exemplet: 
 * paragraph('hej')	==	'<p>hej</p>'
 */
function paragraph (text) {
  

  return '<p>' + text + '</p>'
}
eighteen.onclick = () => console.log(paragraph('hej'))

/**
 * 8 Skriv en funktion som säger hur många dagar en månad har. 
 * Funktionen ska ha en parameter, som är en sträng som motsvarar 
 * månadens namn. Strängen ska vara de tre första tecknen i 
 * månadens namn, dvs jan, feb, mar, apr osv. Funktionen ska 
 * returnera ett tal. Exempelvis så är daysInMonth("mar")	==	31
 * function daysInMonth(month="jan") { .. }
 */
function daysInMonth(month) {
  
  const monthUppercase = month.toUpperCase()

  switch (monthUppercase) {
    case 'JAN':
    case 'MAR':
      return 31
    case 'FEB':
      return 28 // Yooo, hold up. What about leap years? TODO!
    default:
      break
  }
}
nineteen.onclick = () => console.log(daysInMonth('jan'))

/**
 * 9 Skriv en funktion som returnerar de tre första tecknen i en sträng. 
 * Använd funktionen substring(startindex, endindex), som plockar ut 
 * en del av en sträng. Exempel: 'programmering'.substring(3,7) blir 
 * gram'.
 */
function twentyFunction () {
  return 'programmering'.substring(0, 3)
}
twenty.onclick = () => console.log(twentyFunction())

/**
 * 10 Skriv en funktion som du kallar year som plockar ut året från en 
 * sträng i datumformat. Funktionen ska ta en parameter, som ska 
 * vara en sträng. Strängen ska alltid ha 10 tecken och följa mönstret 
 * 'YYYY-MM-DD'. Man ska kunna skriva year('2016-11-02') och få 
 * talet 2016 som resultat.
 */
function year (yyyymmdd) {
  return yyyymmdd.match(/^\d\d\d\d/)[0]
  // return yyyymmdd.split('-').unshift()
  // return yyyymmdd.substring(0, 4)
}
twentyone.onclick = () => console.log(year('2016-11-02'))
