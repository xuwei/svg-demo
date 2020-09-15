import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Footer from './common/Footer'
import NavBar from './common/NavBar'
import HomePage from './page/HomePage'

function App() {

  var defaultTheme = createMuiTheme({
        palette: {
          type:  'dark',
          primary: {
            main: '#7FFFD4'
          }
        }
      })
  
  defaultTheme = responsiveFontSizes(defaultTheme);
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </MuiThemeProvider>
  )
}

export default App;
