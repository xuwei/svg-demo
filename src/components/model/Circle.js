import Shape, { Constants, TypeOfShape, GlobalErrors } from './Shape'
import { CreateShapeResult } from './ShapeFactory'
import NumberUtil from '../util/NumberUtil'

const CircleErrors = {
    InvalidParam : 'Invalid params for circle. Sample - "c <x> <y> <radius>'
}

class Circle extends Shape {

    constructor(type, x, y, radius) {
        super(type)
        this.x = x
        this.y = y
        this.radius = radius
    }

    generateShape = (components) => {
        const numOfParams = 3
        var result = new CreateShapeResult()
        if (components === undefined) { result.error = CircleErrors.InvalidParam; return result }
        if (components.length !== numOfParams) { result.error = CircleErrors.InvalidParam; return result }
        if (!NumberUtil.isNumber(components[0]) || !NumberUtil.isNumber(components[1]) || !NumberUtil.isNumber(components[2])) { result.error = CircleErrors.InvalidParam; return result }
        const circle = new Circle(TypeOfShape.Circle, components[0], components[1], components[2])
        if (circle.isValid() === false) { result.error = GlobalErrors.InvalidDimension; return result }
        
        result.response = circle
        result.error = undefined
        return result
    }

    isValid = () => {
        if (this.radius < 0 || this.radius > Constants.maxSize/2) { return false }
        return true  
    }
}

export default Circle
