import Circle from "./Circle"
import Polygon from "./Polygon"
import Rectangle from './Rectangle'

const TypeOfShape = {
    Rectangle : 'r', 
    Circle : 'c',
    Polygon : 'p'
}

const GlobalErrors = {
    InvalidDimension : "Invalid dimensions. Element size cannot exceed 250."
}

const Constants = {
    maxSize : 250
}

class CreateShapeResult {
    response
    error
}

class ShapeFactory {

    createShape(type, components) {
        switch(type) {
            case TypeOfShape.Rectangle:
                return new Rectangle().generateShape(components)
            case TypeOfShape.Circle:
                return new Circle().generateShape(components)
            case TypeOfShape.Polygon:
                return new Polygon().generateShape(components)
            default:
                return undefined
        }
    }
}

class Shape {
    constructor(type) {
        this.type = type
    }
}

export default Shape
export { ShapeFactory, CreateShapeResult, Constants, TypeOfShape, GlobalErrors }