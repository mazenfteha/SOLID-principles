//With Single Responsibility Principle:

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

class ShapeRenderer {
    render(shape) {
        // Render the shape (for example, draw it on a canvas)
        // Rendering logic here...
        console.log(`Rendering ${shape.constructor.name}...`);
    }
}

// Usage
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

const shapeRenderer = new ShapeRenderer();

console.log(`Area of the circle: ${circle.calculateArea()}`);
shapeRenderer.render(circle);

console.log(`Area of the rectangle: ${rectangle.calculateArea()}`);
shapeRenderer.render(rectangle);