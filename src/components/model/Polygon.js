import Shape, { CreateShapeResult, TypeOfShape } from '../model/Shapes.js'
import NumberUtil from '../util/NumberUtil'

const PolygonErrors = {
    InvalidParam : 'Invalid params for polygon. Sample - "p <x1,y1> <x2,y2> ...'
}

class Coord {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    generateCoord = (components) => {
        
        const numOfParams = 2
        var result = new CreateShapeResult()
        if (components === undefined ) { result.error = PolygonErrors.InvalidParam; return result }
        if (components.length !== numOfParams) { result.error = PolygonErrors.InvalidParam; return result }
        if (!NumberUtil.isNumber(components[0]) || !NumberUtil.isNumber(components[1])) { result.error = PolygonErrors.InvalidParam; return result }

        const coord = new Coord(components[0], components[1])
        result.shape = coord
        result.error = undefined
        return result
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

    generateShape = (components) => {
        var result = new CreateShapeResult()
        if (components === undefined) { result.error = PolygonErrors.InvalidParam; return result }
        var coords = [] 
        
        for (var i = 0; i < components.length; i++) {
            var current = components[i]
            var coordComponents = current.spit(",")
            var coord = new Coord().generateCoord(coordComponents)
            if (coord.error !== undefined) { result.error = coord.error; return result }
            coords.push(coord.response)
        }

        var polygon = new Polygon(TypeOfShape.Polygon, coords)
        result.response = polygon
        result.error = undefined
        return result
    }

    points = () => {
        var result = ""
        for (var i = 0; i < this.coords.length; i++) {
            result += this.coords[i].toString()
            result += " "
        }

        return result
    }
}

export default Polygon 
export { Coord, PolygonErrors }