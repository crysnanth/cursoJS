let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const valA = varA;

varA = varB; // B
varB = varC; // C
varC = valA; // A

console.log(varA, varB, varC);
