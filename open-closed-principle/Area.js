// Example without following OCP

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

class AreaCalculator {
    calculateRectangleArea(rectangle) {
        return rectangle.width * rectangle.height;
    }
}

const rectangle = new Rectangle(5, 10);
const areaCalculator = new AreaCalculator();
console.log(areaCalculator.calculateRectangleArea(rectangle)); // Output: 50