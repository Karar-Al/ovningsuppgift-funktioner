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
function twoFunction () {
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
  function randomizeNumber () {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    let min = Math.ceil(1)
    let max = Math.floor(100)
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
  }

  randomizeNumber()

  function threeFunction () {
    const answer = prompt('Gissa talet mellan 1 och 100:')
    guesses++

    const num = Number(answer)

    if (isNaN(num)) {
      alert('Det du angav var inte ett nummer! Försök igen.')
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
function fourFunction () {
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
function fiveFunction () {
  for (let index = 0; index < 16; index++) {
    console.log(index+1)
  }
  alert('Öppna upp konsolen för utmatningar.')
}
five.onclick = fiveFunction

/**
 * 6 Skriv ett program som har talet 65536 i en variabel. Så länge som 
 * variabeln är större än 2 ska programmet loopa, skriva ut talet och 
 * sedan dela variabeln med 2.
 */
const tal = 65536
function sixFunction () {
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
 * skriver "ord2" ska den nya strängen bli "ord1	ord2". Fortsätt 
 * loopa tills användaren skickar en tom sträng eller en punkt.
 */
let str = ''
function sevenFunction () {
  const answer = prompt('Mata in en sträng, avsluta med en tom rad eller en punkt.')

  str += answer

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
function eightFunction () {
  for (let index = 20; index > 0; index-=2) {
    console.log(index)
  }
  alert('Öppna upp konsolen för utmatningar.')
}
eight.onclick = eightFunction
