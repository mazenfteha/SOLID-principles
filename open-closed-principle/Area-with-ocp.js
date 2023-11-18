// Example following OCP

class Shape {
    calculateArea() {
        // To be overridden by subclasses
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class AreaCalculator {
    calculateArea(shape) {
        return shape.calculateArea();
    }
}

const rectangle = new Rectangle(5, 10);
const circle = new Circle(7);
const areaCalculator = new AreaCalculator();

console.log(areaCalculator.calculateArea(rectangle)); // Output: 50
console.log(areaCalculator.calculateArea(circle)); // Output: 153.93804
