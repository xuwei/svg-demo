import Shape, { Constants, TypeOfShape } from './Shape'
import { CreateShapeResult } from './ShapeFactory'
import NumberUtil from '../util/NumberUtil'

const EclipseErrors = {
    InvalidParam : 'Invalid params for eclipse. Sample - "e <x> <y> <x radius> <y radius>',
    ExceedMaxRadius : 'Radius cannot exceed 125 as element dimension cannot exceed 250.'
}

class Eclipse extends Shape {

    constructor(type, x, y, xRadius, yRadius) {
        super(type)
        this.x = x
        this.y = y
        this.xRadius = xRadius
        this.yRadius = yRadius
    }

    generateShape = (components) => {
        const numOfParams = 4
        var result = new CreateShapeResult()
        if (components === undefined) { result.error = EclipseErrors.InvalidParam; return result }
        if (components.length !== numOfParams) { result.error = EclipseErrors.InvalidParam; return result }
        if (!NumberUtil.isNumber(components[0]) || !NumberUtil.isNumber(components[1]) || !NumberUtil.isNumber(components[2]) || !NumberUtil.isNumber(components[3])) { result.error = EclipseErrors.InvalidParam; return result }
        const eclipse = new Eclipse(TypeOfShape.Eclipse, components[0], components[1], components[2], components[3])
        if (eclipse.isValid() === false) { result.error = EclipseErrors.ExceedMaxRadius; return result }
        
        result.response = eclipse
        result.error = undefined
        return result
    }

    isValid = () => {
        if (this.xRadius < 0 || this.xRadius > Constants.maxSize/2) { return false }
        if (this.yRadius < 0 || this.yRadius > Constants.maxSize/2) { return false }
        return true  
    }
}

export default Eclipse
