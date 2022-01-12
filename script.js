
document.onclick = () => {
  alert('Öppna upp konsolen för utmatningen.')
  document.onclick = undefined
}

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
eleven.onclick = () => alert(add(1,5))

/**
 * 2b Skriv en funktion med namnet multi som multiplicerar tre tal 
 * och returnerar resultatet. Vad händer om man anropar funktionen 
 * med färre än tre parametrar?
 */
function multi (a, b, c) {
  return a * b * c
}
twelve.onclick = () => alert(multi(5,2,3))
twelvebroken.onclick = () => console.log(multi(5,2))

/**
 * 2c Skriv en funktion som tar fyra tal som parametrar. Den ska 
 * multiplicera de tre första och lägga ihop resultatet med den fjärde. 
 * Använd funktionerna add och multi.
 */
function thirteenFunction (a, b, c, d) {
  return add(multi(a, b, c), d)
}
thirteen.onclick = () => alert(thirteenFunction(5,2,7,1))

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
fifteen.onclick = () => alert(fifteenFunction('15'))

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
sixteen.onclick = () => alert(sameDataType('test', 'topp'))
sixteenTwo.onclick = () => alert(sameDataType(5, '5'))

/**
 * 6 Skriv en funktion som avrundar ett tal till två decimaler. Tips: man 
 * kan använda Math.round(x) för att avrunda ett tal till närmast heltal
 */
function seventeenFunction () {
  return (11.256531).toFixed(2)
}
seventeen.onclick = () => alert(seventeenFunction())

/**
 * 7 Skriv en funktion med namnet paragraph, som tar en parameter. 
 * Den ska returnera en sträng enligt det här exemplet: 
 * paragraph('hej')	==	'<p>hej</p>'
 */
function paragraph (text) {
  return '<p>' + text + '</p>'
}
eighteen.onclick = () => alert(paragraph('hej'))

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
nineteen.onclick = () => alert(daysInMonth('jan'))

/**
 * 9 Skriv en funktion som returnerar de tre första tecknen i en sträng. 
 * Använd funktionen substring(startindex, endindex), som plockar ut 
 * en del av en sträng. Exempel: 'programmering'.substring(3,7) blir 
 * gram'.
 */
function twentyFunction () {
  return 'programmering'.substring(0, 3)
}
twenty.onclick = () => alert(twentyFunction())

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
twentyone.onclick = () => alert(year('2016-11-02'))

/**
 * 11 Skriv två funktioner med namnen month och day, som plockar 
 * ut månad respektive dag ur en datumsträng som i uppgift 10. Skriv 
 * med hjälp av dem en funktion med namnet daysBetween som 
 * räknar ut hur många dagar det är mellan två datum. Du kan 
 * förenkla funktionen genom att låtsas att alla månader har 30 dagar.
 * Exempel: daysBetween('2017-08-30', '2017-09-02') == 4
 */
function month (yyyymmdd) {
  return Number(yyyymmdd.match(/^\d\d\d\d-(\d\d)/)[1])
  // return yyyymmdd.split('-')[1]
  // return yyyymmdd.substring(5, 7)
}
function day (yyyymmdd) {
  return Number(yyyymmdd.match(/^\d\d\d\d-\d\d-(\d\d)/)[1])
  // return yyyymmdd.split('-').pop()
  // return yyyymmdd.substring(8, 10)
}

// https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56
const map = (current, in_min, in_max, out_min, out_max) => {
  return (current - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function daysBetween (date1, date2) {
  const m1 = month(date1)
  const m2 = month(date2)

  const d1 = day(date1)
  const d2 = day(date2)

  let days = 0

  const monthsBetween =  m1 > m2 ? m1 - m2 : -(m1 - m2)
  const daysBetween = map(d1, 0, 30, 30, 0) + d2

  // Assuming every month is 30 days.
  days += ((monthsBetween > 0 ? monthsBetween - 1 : monthsBetween) * 30)

  days += daysBetween

  return days
}
twentytwo.onclick = () => alert(daysBetween('2017-08-30', '2017-09-02'))

/**
 * 12 Skriv en funktion som översätter en temperatur i Fahrenheit till 
 * Celsius. Den ska ta en parameter och returnera ett värde. Formeln 
 * finns på den här sidan
 */
function twentythreeFunction (t) {
  return (((t-32)*5) / 9)
}
twentythree.onclick = () => alert(twentythreeFunction(100))

/**
 * 13 Skriv en funktion som returnerar summan av de 100 första 
 * heltalen. Använd en loop. Förbättra sedan funktionen så att den tar 
 * en parameter, som är hur många tal som ska läggas ihop.
 */
function twentyfourFunction () {
  let res = 0
  for (let index = 0; index < 100; index++) {
    res += index
  }
  return res
}
function twentyfourFunctionImproved (param = 0) {
  let res = 0
  for (let index = 0; index < param; index++) {
    res += index    
  }
  return res
}
twentyfour.onclick = () => alert(twentyfourFunction())
twentyfourimproved.onclick = () => alert(twentyfourFunctionImproved(65))

/**
 * 14 Skriv en funktion som tar en sträng som parameter och 
 * returnerar strängen baklänges. Tips: använd funktionen 
 * string.charAt.
 */
function twentyfiveFunction (str) {
  // Behövs ej charAt, JavaScript strängar kan kommas åt med bracket notation:

  // let res = ''
  // for (let index = str.length - 1; index >= 0; index--) {
  //   res += str[index]
  // }
  // return res

  return str.split('').reverse().join('')
}
twentyfive.onclick = () => alert(twentyfiveFunction('baklänges'))

/**
 * 15 Skriv en funktion factorial(n) som räknar ut fakulteten för ett 
 * heltal med en loop. Fakulteten tar man genom att multiplicera talet 
 * med alla mindre tal ner till 1.
 * Exempel: 1! ==	1,	2! ==	2*1, 4! == 4*3*2*1 osv.
 */
function factorial (n) {
  let res = 1
  for (let index = 1; index <= n; index++) {
    res *= index
  }
  return res
}
twentysix.onclick = () => alert(factorial(10))

/**
 * 16 Skriv en ny funktion som beräknar fakulteten rekursivt.
 */
function twentysevenFunction (n) {
  if (n === 1) {
    return 1
  } else {
    return n * twentysevenFunction(n-1)
  }
}
twentyseven.onclick = () => alert(twentysevenFunction(10))

/**
 * 17 Fibonacci-tal är en talserie som börjar med 0, 1. Sedan får man 
 * nästa tal i talserien genom att lägga ihop de två föregående. 
 * Exempel: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, … Skriv en funktion 
 * fibonacci(n) som beräknar det n:te Fibonacci-talet rekursivt. 
 * Extrauppgift: gör en funktion som räknar ut det med en loop.
 */
function fibonacci (n) {
  if (n < 2) {
    return n
  } else {
    return fibonacci(n-1) + fibonacci(n-2)
  }
}
function fibonacciLoop (n) {
  let arr = [0 , 1]

  for (let index = 2; index <= n; index++) {
    arr[index] = arr[index - 1] + arr[index - 2]
  }

  return arr[n]
}
twentyeight.onclick = () => alert(fibonacci(9))
twentyeightloop.onclick = () => alert(fibonacci(9))

/**
 * 18 Skriv en rekursiv funktion som tar en sträng som parameter och 
 * returnerar en ny sträng, som är den gamla strängen baklänges. 
 * Tips: använd string.substring()
 */
function twentynineFunction (str, index) {
  console.log(index)
  if (typeof index === 'undefined') {
    index = str.length - 1
  }

  if (index === 0) {
    return str[0]
  } else {
    return str[index] + twentynineFunction(str, index-1)
  }
}
twentynine.onclick = () => alert(twentynineFunction('baklänges'))

/**
 * 19a Skriv en rekursiv funktion som summerar alla tal i en lista. Tips: 
 * låt funktionen ta två parametrar, listan och en variabel med namnet 
 * index som har defaultvärde 0.
 */
function thirtyFunction (arr, index = 0) {
  if (index >= arr.length - 1) {
    return arr[arr.length - 1]
  } else {
    return arr[index] + thirtyFunction(arr, index+1)
  }
}
thirty.onclick = () => alert(thirtyFunction([1,2,3,4]))

/**
 * 19b Skriv en rekursiv funktion som returnerar det minsta talet i en 
 * lista.
 */
function thirtyoneFunction (arr, index = 0) {
  if (index >= arr.length - 1) {
    return arr[0]
  } else {
    if (arr[0] > arr[1]) {
      arr.shift()
    } else {
      arr.splice(1, 1)
    }
    return thirtyoneFunction(arr)
  }
}
thirtyone.onclick = () => alert(thirtyoneFunction([23,4,5,19,4,7,3,1,100,0.1,50,3,2]))

/**
 * 20 Skriv en rekursiv funktion som ändrar bakgrundsfärgen på alla 
 * element som finns inuti ett visst element. Funktionen behöver två 
 * parametrar: färgen och ett DOM-element, som du hämtar med 
 * getElementById.
 * @param {string} color 
 * @param {HTMLDivElement} element 
 */
function thirtytwoFunction(color, element) {
  if (element.firstElementChild) {
    thirtytwoFunction(color, element.firstElementChild)
    element.firstElementChild.style.backgroundColor = color
  }

  if (element.nextElementSibling) {
    thirtytwoFunction(color, element.nextElementSibling)
    element.style.backgroundColor = color
  }
} // This one sucks! Must be a better way of doing this.
thirtytwo.onclick = () => thirtytwoFunction('turquoise', document.body)

/**
 * 21 Skriv en rekursiv funktion som tar ett DOM-element och en 
 * sträng som parametrar. Den ska returnera true om strängen finns 
 * som text någonstans inuti elementet. Glöm inte att kontrollera 
 * eventuella child elements. Om det till exempel handlar om ett
 * ul-element så behöver man kontrollera alla li-element också.
 * @param {string} color 
 * @param {HTMLDivElement} element 
 */
function thirtythreeFunction(element, str) {
  if (element.textContent === str) return { found: true, element }

  if (element.firstElementChild) {
    return thirtythreeFunction(element.firstElementChild, str)
  }

  if (element.nextElementSibling) {
    return thirtythreeFunction(element.nextElementSibling, str)
  }

  return { found:false }
}
thirtythree.onclick = () => console.log(thirtythreeFunction(document.body, 'Thirty Three'))
