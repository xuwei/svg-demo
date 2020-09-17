import Shape, { TypeOfShape, Constants, GlobalErrors } from './Shape'
import { CreateShapeResult } from './ShapeFactory'
import { Coord } from './Polygon'

const LineErrors = {
    InvalidParam : 'Invalid params for line. Sample - "l <x1,y1> <x2,y2>'
}

class Line extends Shape {

    constructor(type, coords) {
        super(type)
        this.coords = coords
    }

    generateShape = (components) => {
        const numOfParams = 2
        var result = new CreateShapeResult()
        if (components === undefined) { result.error = LineErrors.InvalidParam; return result }
        if (components.length !== numOfParams) { result.error = LineErrors.InvalidParam; return result }
        var coords = [] 
        
        for (var i = 0; i < components.length; i++) {
            var current = components[i]
            var coordComponents = current.split(",")
            var coord = new Coord().generateCoord(coordComponents)
            if (coord.error !== undefined) { result.error = coord.error; return result }
            coords.push(coord.response)
        }

        var line = new Line(TypeOfShape.Line, coords)
        if (line.isValid() === false) { result.error = GlobalErrors.InvalidDimension; return result }
        result.response = line
        result.error = undefined
        return result
    }

    p1 = () => {
        return this.coords[0]
    }

    p2 = () => {
        return this.coords[1]
    }

    isValid = () => {
        const numOfParams = 2
        if (this.coords.length !== numOfParams) { return false }
        const p1 = this.coords[0]
        const p2 = this.coords[1]
        debugger;
        if (Math.abs(p1.x - p2.x) > Constants.maxSize) { return false }
        if (Math.abs(p1.y - p2.y) > Constants.maxSize) { return false }
        return true  
    }
}

export default Line 
export { LineErrors }