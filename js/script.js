var a = prompt('Provide a value'),
    h = prompt('Provide b value'),
    value = a * h / 2;

alert('Your result is ' + value);

function getTriangleArea(a, h) {
   
if ((a > 0) && ( h > 0)) {
        conlole.log('Correct data');
        return a * h / 2;
    }
 
else {
        conlole.log('Invalid data');
    }
}

console.log(getTriangleArea(10, 6));

var triangle1Area1 = getTriangleArea(20, 12);
var triangle1Area2 = getTriangleArea(40, 24);
var triangle1Area3 = getTriangleArea(80, 48);

console.log(triangle1Area1);
console.log(triangle1Area2);
console.log(triangle1Area3);
    
