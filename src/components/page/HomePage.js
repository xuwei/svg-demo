import React from 'react'
import { Hidden, Link, Paper, Typography, Box, Grid, Container, Button } from '@material-ui/core'
import { StandardPadding, LargePadding } from '../Configs'

function HomePage() {

    return (
        <Container>
            <Box flexGrow={1} align="center" py={LargePadding.PY}>
                <Typography variant="h2" color="primary" mx="auto" >
                    SVG Demo
                </Typography>
            </Box>
        </Container>
    )
}

export default HomePage