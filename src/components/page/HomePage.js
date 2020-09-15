import React, { useState, useEffect, useRef } from 'react'
import { TextareaAutosize, Typography, Box, Container, Button } from '@material-ui/core'
import { LargePadding } from '../Configs'
import { Rectangle, Circle, Polygon, TypeOfShape } from '../model/Shapes.js'
import SVGShape from '../common/SVGShape'

function HomePage() {

    const [shapes, setShapes] = useState([])
    const svgCanvasRef = useRef(null)

    const generateShapes = ()=> {
        const inputs = svgCanvasRef.current.value
        if (inputs.length === 0) { alert("empty input"); return }

        // valdiate first before generating shapes for rendering
        const inputLines = inputs.split(/\r?\n/);
        var currentShapes = []
        for (var i = 0; i < inputLines.length; i++) {
            var shape = validateInput(inputLines[i], i+1)
            if (shape !== undefined) {
                currentShapes.push(shape)
            }
        }

        setShapes(currentShapes)
    }

    const validateInput = (input, line)=> {
        if (input.length === 0) { return undefined }
        const components = input.split(" ")
        const type = components[0]
        if (type === TypeOfShape.Rectangle && components.length === 5) {
            // generate Rectangle model and append to Shapes array
            const rect = new Rectangle(type, components[1], components[2], components[3], components[4])
            if (rect.isValid() === false) { alert("Invalid size. Line " + line); return undefined }
            return rect
        } else if (type === TypeOfShape.Circle && components.length === 4) {
            // generate Circle model and append to Shapes array
            const circle = new Circle(type, components[1], components[2], components[3])
            if (circle.isValid() === false) { alert("Invalid size. Line " + line); return undefined }
            return circle
        } else if (type === TypeOfShape.Polygon) {
            // generate Polygon model and append to Shapes array
            var coords = [] 
            for (var i = 1; i < components.length; i++) {
                var curr = components[i]
                var coord = curr.split(",")
                coords.push(coord)
            }
            const polygon = new Polygon(type, coords)
            return polygon
        } else {
            alert("Invalid shape. Line " + line); return undefined
        }
    }

    // this triggers refresh when shapes is updated
    useEffect(() => {
    }, [setShapes])

    return (
        <Container>
            <Box flexGrow={1} align="center" py={LargePadding.PY}>
                <Typography variant="h2" color="primary" mx="auto" >
                    SVG Demo
                </Typography>
            </Box>
            <Box flexGrow={1} align="center" py={LargePadding.PY} xs={12} md={6}>
                <svg width={250} height={250} style={{border: '1px solid gray', background: "dark-gray"}}>
                    {shapes.map((shape) => (
                        <SVGShape model={shape}/>    
                    ))}
                </svg>
            </Box>
            <Box flexGrow={1} align="center" py={LargePadding.PY} xs={12} md={6}>
                <TextareaAutosize ref={svgCanvasRef} aria-label="minimum height" rowsMin={3} placeholder="Enter instructions here" style={{"width": "50%", "textAlign" : "center" }} />
            </Box>
            <Box flexGrow={1} align="center" py={LargePadding.PY} xs={12} md={6}>
                <Button variant="contained" color="primary" onClick={generateShapes}>Generate</Button>
            </Box>
        </Container>
    )
}

export default HomePage