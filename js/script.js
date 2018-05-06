function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {
        console.log('Nieprawidłowe dane - wprowadz dodatnią wartośc');
    } else {
        var value = a*h/2;
        return value;
    } 
}

console.log(getTriangleArea(10, 6));

var triangle1Area1 = getTriangleArea(10, 15),
    triangle1Area2 = getTriangleArea(15, 20),
    triangle1Area3 = getTriangleArea(20, 25);

console.log(triangle1Area1);
console.log(triangle1Area2);
console.log(triangle1Area3);