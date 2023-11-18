// Example without following OCP

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}

class AreaCalculator {
    calculateRectangleArea(rectangle) {
        return rectangle.width * rectangle.height;
    }

    calculateCircleArea(circle) {
        return Math.PI * circle.radius * circle.radius;
    }
}

const rectangle = new Rectangle(5, 10);
const circle = new Circle(7);
const areaCalculator = new AreaCalculator();
console.log(areaCalculator.calculateRectangleArea(rectangle)); // Output: 50
console.log(areaCalculator.calculateCircleArea(circle)); // Output: 153.93804