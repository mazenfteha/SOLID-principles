//this class calculates area and also renders the shape

//Without Single Responsibility Principle:

class Shape {
    constructor(type, dimensions) {
        this.type = type;
        this.dimensions = dimensions;
    }

    calculateArea() {
        if (this.type === "circle") {
            return Math.PI * Math.pow(this.dimensions.radius, 2);
        } else if (this.type === "rectangle") {
            return this.dimensions.width * this.dimensions.height;
        }
        // Additional shapes and calculations can be added, violating SRP.
    }

    render() {
        // Render the shape (for example, draw it on a canvas)
        // Rendering logic here...
        console.log(`Rendering ${this.type}...`);
    }
}

// Usage
const circle = new Shape("circle", { radius: 5 });
console.log(`Area of the circle: ${circle.calculateArea()}`);
circle.render();
