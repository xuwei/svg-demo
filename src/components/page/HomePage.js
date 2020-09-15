import React, { useState, useEffect, useRef } from 'react'
import { TextareaAutosize, Paper, Typography, Box, Container, Button } from '@material-ui/core'
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
        for (var i = 0; i < inputLines.length; i++) {
            validateInput(inputLines[i], i+1)
        }
    }

    const validateInput = (input, line)=> {
        const components = input.split(" ")
        const type = components[0]
        
        console.log(TypeOfShape.Rectangle)

        if (type === TypeOfShape.Rectangle && components.length === 5) {
            // generate Rectangle model and append to Shapes array
            const rect = new Rectangle(type, components[1], components[2], components[3], components[4])
            if (rect.isValid() === false) { alert("invalid size"); return }
            setShapes(shapes.push(rect))
        } else if (type === TypeOfShape.Circle && components.length === 4) {
            // generate Circle model and append to Shapes array
            const circle = new Circle(type, components[1], components[2], components[3])
            if (circle.isValid() === false) { alert("invalid size"); return }
            setShapes(shapes.push(circle))
        } else if (type === TypeOfShape.Polygon) {
            // generate Polygon model and append to Shapes array
            var coords = [] 
            for (var i = 1; i < components.length; i++) {
                var current = components[i]
                var coord = current.split(",")
                coords.push(coord)
            }
            const polygon = new Polygon(type, coords)
            setShapes(shapes.push(polygon))
        } else {
            alert("Invalid shape"); return 
        }
    }

    // this triggers refresh when shapes is updated
    useEffect(() => {
    }, [shapes])

    return (
        <Container>
            <Box flexGrow={1} align="center" py={LargePadding.PY}>
                <Typography variant="h2" color="primary" mx="auto" >
                    SVG Demo
                </Typography>
            </Box>
            <Paper variant="outlined" mx="auto">
                <Box flexGrow={1} align="center" py={LargePadding.PY} xs={12} md={6}>
                    <svg width={250} height={250}>
                        {shapes.map((shape) => (
                            <SVGShape model={shape}/>    
                        ))}
                    </svg>
                </Box>
            </Paper>
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