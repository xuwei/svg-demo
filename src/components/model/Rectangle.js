import Shape, { CreateShapeResult, Constants, TypeOfShape, GlobalErrors } from '../model/Shapes.js'
import NumberUtil from '../util/NumberUtil'

const RectangleErrors = {
    InvalidParam : 'Invalid params for rectangle. Sample - "r <x> <y> <width> <length>'
}

class Rectangle extends Shape {

    constructor(type, x, y, width, height) {
        super(type)
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    generateShape = (components) => {
        const numOfParams = 4
        var result = new CreateShapeResult()
        if (components === undefined) { result.error = RectangleErrors.InvalidParam; return result }
        if (components.length !== numOfParams) { result.error = RectangleErrors.InvalidParam; return result }
        if (!NumberUtil.isNumber(components[0]) || !NumberUtil.isNumber(components[1]) || 
            !NumberUtil.isNumber(components[2]) || !NumberUtil.isNumber(components[3])) { 
            
            result.error = RectangleErrors.InvalidParam 
            return result 
        }

        const rect = new Rectangle(TypeOfShape.Rectangle, components[0], components[1], components[2], components[3])
        if (rect.isValid() === false) { result.error = GlobalErrors.InvalidDimension; return result }
        
        result.response = rect
        result.error = undefined
        return result
    }

    isValid = () => {
        if (this.width < 0 || this.width > Constants.maxSize) { return false }
        if (this.height < 0 || this.height > Constants.maxSize) { return false }
        return true  
    }
}

export default Rectangle 
export { RectangleErrors }