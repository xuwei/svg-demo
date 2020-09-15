const TypeOfShape = {
    Rectangle : 'r', 
    Circle : 'c',
    Polygon : 'p'
}

const Constants = {
    maxSize : 250
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

    isValid = () => {
        if (this.width < 0 || this.width > Constants.maxSize) { return false }
        if (this.height < 0 || this.height > Constants.maxSize) { return false }
        return true  
    }
}

class Circle extends Shape {

    constructor(type, x, y, radius) {
        super(type)
        this.x = x
        this.y = y
        this.radius = radius
    }

    isValid = () => {
        if (this.radius < 0 || this.radius > Constants.maxSize/2) { return false }
        return true  
    }
}

class Coord {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    toString = () => {
        return this.x + "," + this.y
    }
}

class Polygon extends Shape {

    constructor(type, coords) {
        super(type)
        this.coords = coords
    }

    points = () => {
        var result = ""
        for (var i = 0; i < this.coords.length; i++) {
            result += this.coords[i].toString()
            result += " "
        }
        debugger;
        return result
    }
}

export default Shape
export { Rectangle, Circle, Polygon, Coord, TypeOfShape }