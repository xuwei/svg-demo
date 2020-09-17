import React, { useState, useEffect, useRef } from 'react'
import { TextareaAutosize, Typography, Box, Container, Button } from '@material-ui/core'
import { LargePadding, ContentWidth, Expressions } from '../Configs'
import { ShapeFactory, GlobalErrors } from '../model/Shapes'
import AlertUtil from '../util/AlertUtil'
import SVGShape from '../common/SVGShape'

function HomePage() {

    const [shapes, setShapes] = useState([])
    const svgCanvasRef = useRef(null)

    const generateShapes = ()=> {
        const inputs = svgCanvasRef.current.value
        if (inputs.length === 0) { AlertUtil.alert(GlobalErrors.EmptyInput); return }

        // valdiate first before generating shapes for rendering
        const inputLines = inputs.split(Expressions.NewLine);
        var currentShapes = []
        for (var i = 0; i < inputLines.length; i++) {
            const line = i + 1
            let createShapeResult = validateInput(inputLines[i], line)
            if (createShapeResult === undefined) { AlertUtil.alert(GlobalErrors.Generic); return }
            if (createShapeResult.error !== undefined) { AlertUtil.alertWithLine(createShapeResult.error, line); return }
            if (createShapeResult.shape === undefined) { AlertUtil.alert(GlobalErrors.Generic); return }
            currentShapes.push(createShapeResult.shape)
        }

        setShapes(currentShapes)
    }

    const validateInput = (input, line)=> {
        
        // validate input lengths 
        if (input.length === 0) { return undefined }
        const components = input.split(" ")
        if (components.length < 2) { return undefined}
        
        // build shape using ShapeFactory
        const type = components[0]
        const attributeComponents = components.slice(1, components.length)
        var result = new ShapeFactory().createShape(type, attributeComponents)
        if (result === undefined) { return result }

        if (result.error !== undefined) {
            alert(result.error, line)
            return undefined
        } else {
            return result.response 
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
            <Box flexGrow={1} align="center" py={LargePadding.PY} xs={ContentWidth.SM} md={ContentWidth.MD}>
                <svg viewMode="0 0 100 100" width="100%" height={512} xs={ContentWidth.SM} md={ContentWidth.MD} style={{border: '1px solid gray', background: "dark-gray"}}>
                    {shapes.map((shape) => (
                        <SVGShape model={shape}/>    
                    ))}
                </svg>
            </Box>
            <Box flexGrow={1} align="center" py={LargePadding.PY} xs={ContentWidth.SM} md={ContentWidth.MD}>
                <TextareaAutosize ref={svgCanvasRef} aria-label="minimum height" rowsMin={3} placeholder="Enter instructions here" style={{"width": "50%", "textAlign" : "center" }} />
            </Box>
            <Box flexGrow={1} align="center" py={LargePadding.PY} xs={ContentWidth.SM} md={ContentWidth.MD}>
                <Button variant="contained" color="primary" onClick={generateShapes}>Generate</Button>
            </Box>
        </Container>
    )
}

export default HomePage