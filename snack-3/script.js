const numbers = [2, 8, 4, 7, 2, 87];


// Crea un nuovo array in cui tutti i numeri siano incrementati di 1

const nextNumbers = numbers.map(plusOne)

function plusOne(num) {return num + 1;}

console.log(nextNumbers)

// Risultato: [3, 9, 5, 8, 3, 88]