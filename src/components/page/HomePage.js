import React, { useState, useEffect, useRef } from 'react'
import { TextareaAutosize, Paper, Typography, Box, Grid, Container, Button } from '@material-ui/core'
import { LargePadding } from '../Configs'
import { Rectangle, Circle, Polygon, TypeOfShape } from '../model/Shapes.js'

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

        // generate shapes and populate Shapes array
    }

    const validateInput = (input, line)=> {
        const components = input.split(" ")
        const type = components[0]
        
        console.log(TypeOfShape.Rectangle)

        debugger;
        if (type === TypeOfShape.Rectangle) {
            alert("Rectangle on line " + line) 
        } else if (type === TypeOfShape.Circle) {
            alert("Circle on line " + line) 
        } else if (type === TypeOfShape.Polygon) {
            alert("Polygon on line " + line) 
        } else {
            alert("Invalid shape")
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
                <Box flexGrow={1} align="center" py={LargePadding.PY} sm={12} md={6}>
                    <svg viewBox="0 0 250 250">
                        { 
                            shapes.map((shape, i) => (
                                console.log(i)
                            ))
                        }
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