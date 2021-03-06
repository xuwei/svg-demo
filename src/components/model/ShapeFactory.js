import Circle from "./Circle"
import Polygon from "./Polygon"
import Rectangle from './Rectangle'
import Eclipse from './Eclipse'
import Line from './Line'
import { TypeOfShape } from './Shape'

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
            case TypeOfShape.Eclipse:
                return new Eclipse().generateShape(components)
            case TypeOfShape.Line:
                return new Line().generateShape(components)
            default:
                return undefined
        }
    }
}

export default ShapeFactory
export { CreateShapeResult }