for (let i = 0 ; i < 5 ; i++) {
console.log(i);
}
for (let i = 1; i <= 10; i++) {
    numbers1to10 += i + " ";
}
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) { 
        evenNumbers += i + " ";
    }
}
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;  
}
let count = 0;
while (count < 3) {
console.log("Count:", count);
count++;
}
  let number = 5;
        let result = "Значения: ";
        while (number >= 0) {
            result += number + " ";
            number--;
        }
        document.getElementById('output').textContent = result;
 console.log(result);
 let doValue = 0;
do {
console.log("Value:", doValue);
doValue++;
} while (doValue < 3);

for (let i = 1; i <= 10; i++) {

if (i === 5) {
   continue; 
}
if (i === 8) {
    break; 
}
console.log(i);
}
for (let i = 1; i <= 3; i++) {
for (let j = 1 ; j <= 3; j++) {
console.log('i = ${i}, j = ${j}');
}
}
for (let i = 1; i <= 4; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars += '*';
    }
    console.log(stars);
}
function sum(a, b) {
return a + b;
}
console.log(sum(3, 5));

function printInfo(name, age) {
   
    console.log("Имя: " + name + ", Возраст: " + age);
}
printInfo("Анна", 25);
printInfo("Максим", 30);
printInfo("Елена", 28);

console.log(calculateDiscount(1000));  

console.log(calculateDiscount(1000, 20));  
console.log(calculateDiscount(1000, 50));  
console.log(calculateDiscount(1000, 0));   

console.log(calculateDiscount(999.99, 15)); 

let finalPrice = calculateDiscount(2500, 25);
console.log('Итоговая цена:', finalPrice); 