import React from 'react'
import { TypeOfShape } from '../model/Shape'
import ColorUtil from '../util/ColorUtil'

function SVGShape(props) {

    const shape = props.model
    if (shape.type === TypeOfShape.Rectangle) {
        return(<rect x={shape.x} y={shape.y} width={shape.width} height={shape.height} fill={ColorUtil.randomHex()} />)
    } else if (shape.type === TypeOfShape.Circle) {
        return(<circle cx={shape.x} cy={shape.y} r={shape.radius} fill={ColorUtil.randomHex()} />)
    } else if (shape.type === TypeOfShape.Polygon) {
        return(<polygon points={shape.points()} fill={ColorUtil.randomHex()} />)
    }
}

export default SVGShape