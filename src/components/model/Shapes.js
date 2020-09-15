class TypeOfShape {
    RECTANGLE = 'r'
    CIRCLE = 'c'
    POLYGON = 'p'
}

class Shape {

    constructor(type) {
        this.type = type
    }
}

class Rectangle extends Shape {

    constructor(type, x, y, width, height) {
        super(type)
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }
}

class Circle extends Shape {

    constructor(type, x, y, radius) {
        super(type)
        this.x = x
        this.y = y
        this.radius = radius
    }
}

class Coord {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class Polygon extends Shape {

    constructor(type, coords) {
        super(type)
        this.coords = coords
    }
}

export default Shape
export { Rectangle, Circle, Polygon, Coord, TypeOfShape }