import React from 'react'
import { TypeOfShape } from '../model/Shape'
import ColorUtil from '../util/ColorUtil'

function SVGShape(props) {

    const shape = props.model
    switch(shape.type) {
        case TypeOfShape.Rectangle:
            return(<rect x={shape.x} y={shape.y} width={shape.width} height={shape.height} fill={ColorUtil.randomHex()} />)
        case TypeOfShape.Circle:
            return(<circle cx={shape.x} cy={shape.y} r={shape.radius} fill={ColorUtil.randomHex()} />)
        case TypeOfShape.Polygon:
            return(<polygon points={shape.points()} fill={ColorUtil.randomHex()} />)
        case TypeOfShape.Eclipse:
            return(<ellipse cx={shape.x} cy={shape.y} rx={shape.xRadius} ry={shape.yRadius} fill={ColorUtil.randomHex()} />)
        case TypeOfShape.Line:
            return(<line x1={shape.p1().x} y1={shape.p1().y} x2={shape.p2().x} y2={shape.p2().y} stroke={ColorUtil.randomHex()} strokeWidth={1}/>)
        default:
            break
    }
}

export default SVGShape